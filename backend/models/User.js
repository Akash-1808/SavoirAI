import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  level: { type: String, required: true },       // "10th", "12th", "Graduation", "Post Graduation"
  institution: { type: String, required: true }, // school/college name
  year: { type: Number, required: true },        // passing year
  percentage: { type: Number }                   // optional
});
const pastJobExperience = new mongoose.Schema({
  companyName: {type:String, required:true},
  role: {type:String, required:true},
  startDate: {type:Date, required:true},
  endDate: {type:Date, required:true},
  description : {type:String, required:false}
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ["candidate", "admin", "employer"], default: "candidate" },
  skills: { type: [String], default: [] },       // array of strings
  interests: { type: [String], default: [] },    // array of strings
  education: { type: [educationSchema], default: [] }, // multiple education levels
  location: { type: String, required: true },
  experience: {type: [pastJobExperience], default: []},
  appliedInternships: [{ type: mongoose.Schema.Types.ObjectId, ref: "Internship" }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
