import { Router } from "express";
import User from "../model/user";

const router = Router();

router.post("/login-user", async (req, res) => {
  // Gauti vartotojo įvestis iš užklausos. istraukiami vartotojo duomenys (pastas, slaptazodis)
  const { email, password } = req.body;

  // Surasti vartotoją duomenų bazėje, iesko vartotojo duom bazeje
  const user = await User.findOne({ email });

  // Patikrinti ar vartotojas rastas ir ar slaptažodis teisingas
  // if (user && user.password === password) {
  if (user.email === email && user.password === password) {
    req.session.loggedIn = true;
    res.json("Sveikiname prisijungus");
  } else {
    res.status(401).json("Neteisingi prisijungimo duomenys");
  }
});

export default router;
