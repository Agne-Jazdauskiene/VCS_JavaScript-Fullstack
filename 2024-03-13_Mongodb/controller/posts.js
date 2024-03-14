// CRUD API:

// Pasinaudodami šiandienos paskaitos medžiaga praplėskite funkcionalumą.
// Sukurkite naują kolekciją pavadinimu "posts". Kiekvienas įrašas turės šiuos duomenis:
// title (String)
// content (String)
// author (String)
// view_count (Number)
// created_at (Date)

// Sukurkite API funkcionalumą leidžiantį:
// 1. Sukurti naują įrašą
// 2. Peržiūrėti pasirinktą įrašą
// 3. Atnaujinti pasirinktą įrašą,
// 4. Ištrinti norimą įrašą,
// 5. Peržiūrėti visus įrašus
// 6. Susigrąžinti visų įrašų kiekį kolekcijoje.
// Po naujo įrašo sukūrimo ir atnaujinimo, grąžinamas įrašo turinys.

// CRUD API V2:

//  Papildykite Vakarykštę aplikaciją integruodami šiuos funkcionalumus.
// 1. Kiekvieną kartą peržiūrint pasirinktą įrašą, padidinkite jo peržiūrų skaičių (view_count) + 1;
// 2. Keliant naują įrašą integruokite nuotraukos pridėjimo galimybę.
// 3. Redaguojant įrašą integruokite nuotraukos pridėjimo galimybę.
// 4. Modifikuokite failų validatorių taip, jog nuotraukos, kurios yra didesnės nei 2 megabaitai, nebūtų praleidžiamos. https://www.bbc.co.uk/bitesize/guides/z8qymsg/revision/6

// PAPILDOMAI:
// Ištrinant įrašą pašalinkite ir nuotraukos failą (reikės NodeJS filesystem modulio)
// Redaguojant įrašą, jeigu keliama nauja nuotrauka pašalinkite senąją.

import { Router } from "express";
import Post from "../model/posts.js";

const router = Router();

// GET METODU VISUS DĖTI PAČIAME VIRŠUJE

// 6. Susigrąžinti visų įrašų kiekį kolekcijoje.
router.get("/total_posts", async (req, res) => {
  // const obj = await Post.find();
  // res.send({ count: obj.length });
  //ARBA
  res.send({ count: await Post.countDocuments() });
});

//5.Peržiūrėti visus įrašus
router.get("/all_posts", async (req, res) => {
  // Visų įrašų grąžinimas
  res.send(await Post.find());
});

// 2 Peržiūrėti pasirinktą įrašą
router.get("/:id", async (req, res) => {
  // Vieno įrašo paėmimas

  // Norint paimti parametro reikšmę: req.params
  res.send(await Post.findById(req.params.id));
});

// 1 Sukurti naują įrašą
router.post("/", async (req, res) => {
  //Data 1 var.
  // await Post.create({ ...req.body, created_at: Date.now() });
  //ARBA data - 2 var.

  req.body.created_at = new Date();

  const result = await Post.create(req.body);
  // res.send("Naujas įrašas"); Grazina tik sia zinute
  res.send({ message: "Irasas sukurtas", result });
});

// 3. Atnaujinti pasirinktą įrašą,
// Įrašo atnaujinimas
router.put("/:id", async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, req.body);

  res.send("Įrašas sėkmingai atnaujintas");
});

//4. Ištrinti norimą įrašą,
// Įrašo ištrynimas
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.send("Įrašas sėkmingai ištrintas");
});

export default router;
