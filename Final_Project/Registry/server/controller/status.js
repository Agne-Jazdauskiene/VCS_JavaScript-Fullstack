import { Router } from "express";
import Status from "../model/status.js";

const router = Router();

// Naujo iraso sukurimas
router.get("/project", async (req, res) => {
  try {
    // Populate metodas uzpildo schemoje pazymeta raktazodi modelio informacijoje
    res.json(await Status.find().populate("project_status"));
  } catch {
    res.status(500).json("Įvyko prisijungimo klaida");
  }
});

export default router;
