import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // token stored in cookie
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.user = decoded; // attach decoded user info to req
    next();
  });
};
