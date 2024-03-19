import { Router } from "express";
import Comment from "../model/comment.js";

const router = { Router };

//Komentaru, kurie priklauso postui, susigrazinimas
router.get("/:post_id", async (req, res) => {
  try {
    const data = await Comment.find({ post: req.params.post_id }).populate(
      "author",
      ["user_name", "photo"]
    );

    res.json(data);
  } catch {
    res.status(500).json("Ivyko klaida");
  }
});

// naujo komentaro sukurimas
router.post("/", async (req, res) => {
  try {
    await Comment.create(req.body);
    res.json("irasas sekmingai issaugotas");
  } catch {
    res.status(500).json("ivyko klaida");
  }
});

//Komentaro istrynimas
router.delete("/:id", async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.id });
    res.json("Komentaras sekmingai pasalintas");
  } catch {
    res.status(500).json("Ivyko klaida");
  }
});

export default router;
