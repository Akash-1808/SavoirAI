import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  level: { type: String, required: true },       // "10th", "12th", "Graduation", "Post Graduation"
  institution: { type: String, required: true }, // school/college name
  year: { type: Number, required: true },        // passing year
  percentage: { type: Number }                   // optional
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ["candidate", "admin", "employer"], default: "candidate" },
  skills: { type: [String], default: [] },       // array of strings
  interests: { type: [String], default: [] },    // array of strings
  education: { type: [educationSchema], default: [] }, // multiple education levels
  location: { type: String, required: true },
  appliedInternships: [{ type: mongoose.Schema.Types.ObjectId, ref: "Internship" }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
