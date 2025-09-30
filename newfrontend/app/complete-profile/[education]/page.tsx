"use client";
import { useState } from "react";
import axios from "axios";
import { div } from "motion/react-client";

export default function CompleteProfile() {
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState([
    { level: "10th", institution: "", year: 0, percentage: 0 , skills: ""},
    { level: "12th", institution: "", year: 0, percentage: 0, skills: ""},
    { level: "Graduation", institution: "", year: 0, percentage: 0, skills: ""},
    { level: "Post Graduation", institution: "", year: 0, percentage: 0, skills: ""},
  ]);


  const [experience, setExperience] = useState([
    { company: "", role: "", startDate: 0, endDate: 0, description: "" },
  ]);

  // Add new empty experience entry
    const addExperience = () => {
        setExperience([...experience, { company: "", role: "", startDate: 0, endDate: 0, description: "" }]);
    }
    // Remove experience entry
    const removeExperience = (index: any) => {
        const newExp = [...experience];
        newExp.splice(index, 1);
        setExperience(newExp);
    }
  // Add new empty education entry
  const addEducation = () => {
    setEducation([...education, { level: "", institution: "", year: 0, percentage: 0, skills: "" }]);
  };

  // Remove education entry
  const removeEducation = (index: any) => {
    const newEdu = [...education];
    newEdu.splice(index, 1);
    setEducation(newEdu);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/completeprofile",
        { skills, interests, education, location },
        { withCredentials: true }
      );
      console.log("Profile updated:", res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 p-4 ">
    <div className="border rounded-lg p-6 bg-slate-800 w-full space-y-4">
      <h1 className="text-3xl font-bold ">Complete Your Profile</h1>

      {/* Skills */}
     

      {/* Education */}
      <h3>Education</h3>
      <div className="flex gap-4 ">
      {education.map((edu, idx) => (
        <div key={idx} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }} className="rounded-sm bg-slate-500 shadow-sm bg-blend-color-burn" >
          <input
            type="text"
            placeholder="Level (e.g., 10th, Graduation)"
            value={edu.level}
            className="w-full p-2 border rounded bg-gray-700 mt-7"
            onChange={e => {
              const newEdu = [...education];
              newEdu[idx].level = e.target.value;
              setEducation(newEdu);
            }}
          />
          <input
            type="text"
            placeholder="Institution"
            value={edu.institution}
            className="w-full p-2 border rounded bg-gray-700  mt-7"
            onChange={e => {
              const newEdu = [...education];
              newEdu[idx].institution = e.target.value;
              setEducation(newEdu);
            }}
          />
          <input
            type="number"
            placeholder="Year"
            value={edu.year}
            className="w-full p-2 border rounded bg-gray-700 mt-7 "
            onChange={e => {
              const newEdu = [...education];
              newEdu[idx].year = Number(e.target.value);
              setEducation(newEdu);
            }}
          />
          <input
            type="number"
            placeholder="Percentage"
            value={edu.percentage}
            className="w-full p-2 border rounded bg-gray-700 mt-7"
            onChange={e => {
              const newEdu = [...education];
              newEdu[idx].percentage = Number(e.target.value);
              setEducation(newEdu);
            }}
          />
          <input type="text" value={edu.skills} className="w-full p-2 border rounded bg-gray-700 mt-7" placeholder="Skills"  onChange={e => {
            const newEdu = [...education];
            newEdu[idx].skills = e.target.value;
            setEducation(newEdu);
          }}/>
          <button className="mt-2 bg-red-400 p-2 rounded-sm" onClick={() => removeEducation(idx)}>Remove</button>
        </div>
      ))}
      </div>
      <button onClick={addEducation} className="mt-4 bg-blue-400 p-3 rounded-sm">Add More Education</button>
        {/** Experience */}
        
        {experience.map((exp, idx) => (
        <div key={idx} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }} className="rounded-sm bg-slate-500 shadow-sm bg-blend-color-burn">
            <h1 className="text-2xl font-bold">Experience</h1>
          <input
            type="text"
            placeholder="Level (e.g., 10th, Graduation)"
            value={exp.company}
            className="w-full p-2 border rounded bg-gray-700 mt-7"
            onChange={e => {
              const newExp = [...experience];
              newExp[idx].company = e.target.value;
              setExperience(newExp);
            }}
          />
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            className="w-full p-2 border rounded bg-gray-700  mt-7"
            onChange={e => {
              const newExp = [...experience];
              newExp[idx].role = e.target.value;
              setExperience(newExp);
            }}
          />
          <label className="mt-7">Start-Date</label>
          <input
            type="date"
            placeholder="Start Date"
            value={exp.startDate}
            className="w-full p-2 border rounded bg-gray-700 mt-2"
            onChange={e => {
              const newExp = [...experience];
              newExp[idx].startDate = Number(e.target.value);
              setExperience(newExp);
            }}
          />
          <label className="mt-7">End-Date</label>
          <input
            type="date"
            placeholder="End Date"
            value={exp.endDate}
            className="w-full p-2 border rounded bg-gray-700 mt-2"
            onChange={e => {
              const newExp = [...experience];
              newExp[idx].endDate = Number(e.target.value);
              setExperience(newExp);
            }}
          />
          <input type="text" value={exp.description} className="w-full p-2 border rounded bg-gray-700 mt-7" placeholder="Description"  onChange={e => {
            const newExp = [...experience];
            newExp[idx].description = e.target.value;
            setExperience(newExp);
          }}/>
          <button className="mt-2 bg-red-400 p-2 rounded-sm" onClick={() => removeExperience(idx)}>Remove</button>
        </div>
      ))}
        

       <input
        type="text"
        placeholder="Skills comma separated"
        className="w-full p-2 border rounded bg-gray-700 "
        onChange={e => setSkills(e.target.value.split(","))}
      />

      {/* Interests */}
      <input
        type="text"
        placeholder="Interests comma separated"
        className="w-full p-2 border rounded bg-gray-700 "
        onChange={e => setInterests(e.target.value.split(","))}
      />

      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        className="w-full p-2 border rounded bg-gray-700 "
        value={location}
        onChange={e => setLocation(e.target.value)}
      />

      <button onClick={addEducation} className="mt-4 bg-blue-400 p-3 rounded-sm">Add More Education</button>
      <br /><br />
      <button onClick={handleSubmit} className="mt-4 bg-green-400 p-3 rounded-sm">Submit Profile</button>
    </div>
    </div>
  );
}