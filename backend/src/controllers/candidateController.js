import { getInternshipsByCriteria } from "../models/internshipModel.js";

export const getRecommendations = async (req, res) => {
  try {
    const { skills, location } = req.body;
    const internships = await getInternshipsByCriteria(skills, location);
    res.json({ recommendations: internships });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
};
