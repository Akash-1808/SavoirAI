import pool from "../config/db.js";

export const getInternshipsByCriteria = async (skills, location) => {
  const res = await pool.query(
    `SELECT * FROM internships 
     WHERE skills_required && $1::text[] 
     OR location = $2 
     LIMIT 5`,
    [skills, location]
  );
  return res.rows;
};
