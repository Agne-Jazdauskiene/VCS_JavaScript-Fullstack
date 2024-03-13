// CRUD API:

// Pasinaudodami šiandienos paskaitos medžiaga praplėskite funkcionalumą.
// Sukurkite naują kolekciją pavadinimu "posts". Kiekvienas įrašas turės šiuos duomenis:
// title (String)
// content (String)
// author (String)
// view_count (Number)
// created_at (Date)

// Sukurkite API funkcionalumą leidžiantį:
// Sukurti naują įrašą
// Peržiūrėti pasirinktą įrašą
// Atnaujinti pasirinktą įrašą,
// Ištrinti norimą įrašą,
// Peržiūrėti visus įrašus
// Susigrąžinti visų įrašų kiekį kolekcijoje.

// Po naujo įrašo sukūrimo ir atnaujinimo grąžinamas įrašo turinys.

import { Router } from "express";
import Post from "../model/posts.js";

const router = Router();

router.post("/", async (req, res) => {
  await Post.create(req.body);
  res.send("Naujas įrašas");
});

export default router;
