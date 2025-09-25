import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ["Full-time", "Part-time", "Work from Home"], default: "Full-time" },
  duration: { type: String, required: true }, // e.g., "3 months"
  stipend: { type: Number, default: 0 },
  skillsRequired: { type: [String], default: [] },
  description: { type: String },
  postedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Internship", internshipSchema);
