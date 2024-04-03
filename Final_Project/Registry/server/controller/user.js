import { Router } from "express";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import auth from "../middleware/auth.js";

const router = Router();

// Autentifikacija
router.get("/check-auth", auth, (req, res) => {
  res.status(200).json(req.session.user);
});

// Atsijungimas

// logout turi eiti prieš router.get single-user info, jei single-user info adrese naudoju tik :id, t.y. nepatikslintą adresą.
router.get("/logout", auth, (req, res) => {
  req.session.destroy();
  res.json("Sveikiname sėkmingai atsijungus");
});

//Naujo userio registravimas
router.post("/register/", async (req, res) => {
  console.log(req.body);

  try {
    // limito nustatymas - naujas vartotojas-  ir skaičiavimas
    const usersCount = await User.countDocuments();
    if (usersCount >= 141) {
      return res.status(403).send("Viršytas seimo narių maksimalus skaičius");
    }
    const newUser = req.body.user_name;
    // registeredUsers.push(newUser);

    // Slaptažodžio šifravimas
    // hash - yra šifruotas stringas
    req.body.password = await bcrypt.hash(req.body.password, 10);

    // Sukuriame vartotoją
    await User.create(req.body);
    console.log(User);
    // Grąžiname žinutę
    res.json("Vartotojas sėkmingai sukurtas");
  } catch (e) {
    console.log(e);
    // Įvykus klaidai grąžiname klaidos kodą ir žinutę
    res.status(500).json("Registruojant vartotoją įvyko klaida");
  }
});

//Prisijungimas
router.post("/login", async (req, res) => {
  console.log(req.body);
  // Prisijungimui tikimės:
  // Emailo ir slaptažodžio
  try {
    const data = await User.findOne({ email: req.body.email });
    // Jei vartotojas nerastas nuotraukiame funkciją ir grąžiname žinutę
    if (!data) return res.status(401).json("Neteisingas el. pašto adresas");

    // Jei vartotojo slaptažodis nesutampa su įvestu grąžiname klaidos kodą ir žinutę
    if (!(await bcrypt.compare(req.body.password, data.password)))
      return res.status(401).json("Neteisingas slaptažodis");

    // Priskiriame vartotojo informaciją prie sesijos
    req.session.user = {
      _id: data._id,
      user_name: data.user_name,
      last_name: data.last_name,
      party_name: data.party_name,
      email: data.email,
      manager: data.manager,
    };

    // Išsiunčiame vartotojo duomenis
    res.json(req.session.user);
  } catch {
    // Grąžinamas atsakymas įvykus klaidai
    res.status(500).json("Įvyko klaida prisijungiant");
  }
});

// Vartotojo informacijos paėmimas. Adresą patikslinau - /single-user/:id
router.get("/single-user/:id", async (req, res) => {
  try {
    res.json(
      await User.findById(req.params.id).select([
        "user_name",
        "last_name",
        "party_name",
        "email",
        "manager",
      ])
      // .populate("projects")
      // .populate("postCount")
    );
  } catch (e) {
    console.log(e);
    res.status(500).json("Įvyko klaida");
  }
});
// Editinimas - userio atnaujinimnas
router.put("/single-user/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(req.body);
});

// All Users informacijos paėmimas
router.get("/", async (req, res) => {
  try {
    res.json(await User.find());
  } catch {
    res.status(500).json("ivyko klaida");
  }
});

// AUTENTIFIKAVIMAS --- DARYTI PAČIOJE PABAIGOJE
// kad neatsijungtų iš serverio ir nedingtų visa info
router.get("/check-auth", auth, (req, res) => {
  res.status(200).json(req.session.user);
});
export default router;
