import { Router } from "express";
import Post from "../model/post.js";
import upload from "../middleware/multer.js"; //nuotraukoms importuoti

const router = Router();

//Grazinamas visu post'u sarasas
router.get("/", (req, res) => {});

//Naujo iraso sukurimas
router.post("/", upload.single("photo"), async (req, res) => {
  // console.log(req.body);
  if (req.file) req.body.photo = req.file.filename;

  try {
    await Post.create(req.body);
    res.json("Irasas sekmingai issaugotas");
  } catch {
    res.status(500).json("Ivyko klaida");
  }
});

export default router;
