import { Router } from "express";
import Like from "../model/like.js";

const router = Router();

// Naujo įrašo/komentaro sukūrimas
router.post("/", async (req, res) => {
  try {
    const data = await Like.findOne(req.body);
    // console.log(req.body);
    // isfiltruojame palaikintus postus ir autorius
    //Tikriname, ar Like'as jau buvo priskirtas postui
    if (data) {
      //Jeigu Like'as jau buvo pridetas, noresime ji pasalinti
      await data.deleteOne();
    } else {
      //Jeigu nebuvo, tuomet nnoresime prideti
      await Like.create(req.body);
    }
    res.json("Įrašas sėkmingai išssaugotas");
  } catch (e) {
    // Įvykus klaidai grąžiname klaidos kodą ir žinutę
    res.status(500).json("Įvyko klaida");
  }
});

export default router;

// router.post('/', async (req, res) => {
//   try {
//       const data = await Like.findOne(req.body);
//       // Tikriname ar Like'as jau buvo priskirtas postui
//       if(data) {
//           await Like.create(req.body); // Jeigu Like'as jau buvo pridėtas, norėsime jį pašalinti
//       } else {
//           await data.deleteOne(); // Jeigu nebuvo, tuomet norėsime pridėti
//       }

//       res.json('Įrašas sėkmingai išssaugotas');
//   } catch(e) {
//       console.log(e);
//       // Įvykus klaidai grąžiname klaidos kodą ir žinutę
//       res.status(500).json('Įvyko klaida');
//   }
// });
