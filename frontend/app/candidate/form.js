'use client';
import { useState } from "react";
import { getRecommendations } from "../../lib/api";

export default function CandidateForm() {
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getRecommendations(skills.split(","), location);
    setRecommendations(res.recommendations);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Preferred Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Recommendations</button>
      </form>

      <div className="mt-4">
        {recommendations.map((intern, i) => (
          <div key={i} className="border p-3 my-2 rounded">
            <h2 className="font-bold">{intern.title}</h2>
            <p>{intern.company}</p>
            <p className="text-sm text-gray-600">{intern.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
