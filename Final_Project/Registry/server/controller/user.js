import { Router } from "express";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import auth from "../middleware/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);

    //sukuriu vartoroja
    await User.create(req.body);
    console.log(User);
    res.json("Vartotojas sėkmingai sukurtas");
  } catch (e) {
    console.log(e);
    res.status(500).json("Registruojant vartotoją įvyko klaida");
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);

  try {
    const data = await User.findOne({ email: req.body.email });

    if (!data) return res.status(401).json("Neteisingas el. pašto adresas");
    // res.send.json("Sveiki prisijungę");

    if (!(await bcrypt.compare(req.body.password, data.password)))
      return res.status(401).json("Neteisingas slaptažodis");

    req.session.user = {
      _id: data._id,
      user_name: data.user_name,
      last_name: data.last_name,
      party_name: data.party_name,
      email: data.email,
    };

    res.json(req.session.user);
  } catch {
    res.status(500).json("Įvyko klaida prisijungiant");
  }
});

// logout turi eiti prieš router.get single-user info, jei single-user info adrese naudoju tik :id, t.y. nepatikslintą adresą.
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json("Sveikiname sėkmingai atsijungus");
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
      // .populate("posts")
      // .populate("postCount")
    );
  } catch {
    res.status(500).json("Įvyko klaida");
  }
});

// DARYTI PAČIOJE PABAIGOJE, kad neatsijungtų iš serverio ir nedingtų visa info
// router.get("/check-auth", auth, (req, res) => {
//   res.status(200).json(req.session.user);
// });
export default router;
