// CRUD API V2:

//  Papildykite Vakarykštę aplikaciją integruodami šiuos funkcionalumus.
// 1. Kiekvieną kartą peržiūrint pasirinktą įrašą, padidinkite jo peržiūrų skaičių (view_count) + 1;
// 2. Keliant naują įrašą integruokite nuotraukos pridėjimo galimybę.
// 3. Redaguojant įrašą integruokite nuotraukos pridėjimo galimybę.
// 4. Modifikuokite failų validatorių taip, jog nuotraukos, kurios yra didesnės nei 2 megabaitai, nebūtų praleidžiamos. https://www.bbc.co.uk/bitesize/guides/z8qymsg/revision/6
//stackoverflow.com/questions/34697502/how-to-limit-the-file-size-when-uploading-with-multer

// PAPILDOMAI:
// Ištrinant įrašą pašalinkite ir nuotraukos failą (reikės NodeJS filesystem modulio)
// Redaguojant įrašą, jeigu keliama nauja nuotrauka pašalinkite senąją.

import { Router } from "express";
import Post from "../model/posts.js";
import upload from "../middleware/multer.js";
import { rm } from "node:fs/promises";

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
// VAR2 - 1. Kiekvieną kartą peržiūrint pasirinktą įrašą, padidinkite jo peržiūrų skaičių (view_count) + 1;
router.get("/:id", async (req, res) => {
  // Vieno įrašo paėmimas
  // Norint paimti parametro reikšmę: req.params
  const postas = await Post.findById(req.params.id); //VAR2- 1 uzd.
  // console.log(postas.view_count);
  postas.view_count += 1; //VAR2- 1 uzd.
  console.log(postas); //VAR2- 1 uzd.

  await Post.findByIdAndUpdate(req.params.id, postas); //VAR2- 1 uzd.

  res.send(await Post.findById(req.params.id));
});

// 1 Sukurti naują įrašą
// VAR2 - 2. Keliant naują įrašą integruokite nuotraukos pridėjimo galimybę.
router.post("/", upload.single("image"), async (req, res) => {
  //Data 1 var.
  // await Post.create({ ...req.body, created_at: Date.now() });
  //ARBA data - 2 var.
  console.log(req.file);
  req.body.created_at = new Date();
  req.body.photo = req.file?.filename;

  const result = await Post.create(req.body);
  // res.send("Naujas įrašas"); Grazina tik sia zinute
  res.send({ message: "Irasas sukurtas", result });
});

// 3. Atnaujinti pasirinktą įrašą,
// VAR2 - 3. Redaguojant įrašą integruokite nuotraukos pridėjimo galimybę.
// Įrašo atnaujinimas
router.put("/:id", upload.single("image"), async (req, res) => {
  // Ištrinant įrašą pašalinkite ir nuotraukos failą (reikės NodeJS filesystem modulio)
  // istrina sena nuotrauka, kai ikeliame nauja
  if (req.file) {
    const oldPost = await Post.findById(req.params.id);
    if (oldPost.photo) {
      await rm("./uploads/" + oldPost.photo);
    }
    req.body.photo = req.file?.filename;
  }

  await Post.findByIdAndUpdate(req.params.id, req.body);

  res.send("Įrašas sėkmingai atnaujintas");
});

//4. Ištrinti norimą įrašą,
// Įrašo ištrynimas
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.send("Įrašas sėkmingai ištrintas");
});

// CRUD API V2:
// Papildykite Vakarykštę aplikaciją integruodami šiuos funkcionalumus.
// 1. Kiekvieną kartą peržiūrint pasirinktą įrašą, padidinkite jo peržiūrų skaičių (view_count) + 1;
// ziureti prie VAR1 - 2 uzd.
// router.get("/:id", async (req, res) => {
//   // Vieno įrašo paėmimas
//   // Norint paimti parametro reikšmę: req.params
//   const postas = await Post.findById(req.params.id); //VAR2- 1 uzd.
//   // console.log(postas.view_count);
//   postas.view_count += 1; //VAR2- 1 uzd.
//   console.log(postas); //VAR2- 1 uzd.

//   await Post.findByIdAndUpdate(req.params.id, postas); //VAR2- 1 uzd.

//   res.send(await Post.findById(req.params.id));
// });

export default router;
