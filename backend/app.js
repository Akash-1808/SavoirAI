import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import candidateRoutes from "./src/routes/candidateRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/candidates", candidateRoutes);
app.use("/api/auth", authRoutes);





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
