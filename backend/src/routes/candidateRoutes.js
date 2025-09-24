import express from "express";
import { getRecommendations } from "../controllers/candidateController.js";

const router = express.Router();

router.post("/recommendations", getRecommendations);

export default router;
