export async function getRecommendations(skills, location) {
  const res = await fetch("http://localhost:5000/api/candidates/recommendations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ skills, location }),
  });
  return await res.json();
}
