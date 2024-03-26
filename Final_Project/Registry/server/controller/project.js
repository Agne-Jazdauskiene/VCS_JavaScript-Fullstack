import { Router } from "express";
import Project from "../model/project.js";
// import Status from "../model/status.js";
import upload from "../middleware/multer.js";

const router = Router();

// Naujo projekto siūlymo sukūrimas
router.post("/", upload.single("project_photo"), async (req, res) => {
  if (req.file) req.body.project_photo = req.file.filename;

  try {
    await Project.create(req.body);
    res.json("Įrašas sėkmingai išsaugotas");
  } catch (e) {
    // Įvykus klaidai grąžiname klaidos kodą ir žinutę
    console.log(e);
    res.status(500).json("Įvyko klaida");
  }
});

// Grąžinamas visų projektų sąrašas
router.get("/", async (req, res) => {
  try {
    // Populate metodas užildo schemoje pažymėtą raktažodį modelio informacija
    res.json(
      await Project.find()
        .populate("author", ["user_name", "last_name", "party_name"])
        .populate("project_status")
    );
  } catch (e) {
    console.log(e);
    res.status(500).json("Įvyko klaida");
  }
});

// Vieno projekto informacijos paėmimas. Adresą patikslinau - /single-project/:id
// router.get("/single-project/:id", async (req, res) => {
//   try {
//     res.json(
//       await Project.findById(req.params.id)
//         .select([
//           "project_name",
//           "project_photo",
//           "project_description",
//           "consideration_date",
//           "project_status",
//         ])
//         .populate("projects")
//       // .populate("postCount")
//     );
//   } catch {
//     res.status(500).json("Įvyko klaida");
//   }
// });

export default router;
