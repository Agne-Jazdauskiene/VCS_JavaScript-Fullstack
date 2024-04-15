import { Router } from "express";
import Project from "../model/project.js";
import upload from "../middleware/multer.js";
import { rm } from "node:fs/promises";
import auth from "../middleware/auth.js";

const router = Router();

// Naujo projekto siūlymo sukūrimas
router.post("/", auth, upload.single("project_photo"), async (req, res) => {
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
router.get("/", auth, async (req, res) => {
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

// grąžinamas vienas projektas
router.get("/:id", auth, async (req, res) => {
  try {
    res.json(await Project.findById(req.params.id));
  } catch (e) {
    console.log(e);
    res.status(500).json("Įvyko klaida");
  }
});

// Editinimas - Įrašo atnaujinimnas
router.put("/:id", auth, upload.single("project_photo"), async (req, res) => {
  if (req.file) {
    const newProject = await Project.findById(req.params.id);
    if (newProject.project_photo) {
      await rm("./uploads/" + newProject.project_photo);
    }
    req.body.project_photo = req.file.filename;
  }

  await Project.findByIdAndUpdate(req.params.id, req.body);
  res.send(req.body);
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
//       // .populate("project_status")
//     );
//   } catch {
//     res.status(500).json("Įvyko klaida");
//   }
// });

// Projekto ištrynimas
router.delete("/:id", auth, async (req, res) => {
  console.log(req.params.id);
  try {
    await Project.deleteOne({ _id: req.params.id });
    res.json("Projektas sėkmingai pašalintas");
  } catch (e) {
    console.log(e);
    res.status(500).json("Įvyko serverio klaida trinant projektą");
  }
});

export default router;
