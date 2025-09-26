import express from 'express';
const router = express.Router();
import User from "../models/User.js";
import Internship from "../models/Internship.js";

import {verifyToken} from '../verifyToken.js'

router.put("/completeprofile", verifyToken, async (req, res) => {
  try {
    const userId = req.user._id; // user ID comes from verifyToken middleware
    const { skills, interests, education, location } = req.body;

    // Optional: validate education array
    if (!Array.isArray(education)) {
      return res.status(400).json({ error: "Education must be an array" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { skills, interests, education, location },
      { new: true } // return updated document
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update profile", details: err.message });
  }
});

router.get("/internships", verifyToken, async (req, res) => {
  try {
    // 1️⃣ Get logged-in user
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ error: "User not found" });

    // 2️⃣ Get user's skills
    const userSkills = user.skills || [];

    if (userSkills.length === 0) {
      // If user has no skills, return all internships
      const allInternships = await Internship.find().sort({ postedAt: -1 });
      return res.status(200).json(allInternships);
    }

    // 3️⃣ Find internships that match at least one skill
    const internships = await Internship.find({
      skillsRequired: { $in: userSkills }
    }).sort({ postedAt: -1 });

    res.status(200).json(internships);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch internships", details: err.message });
  }
});



export const userRoute = router;
