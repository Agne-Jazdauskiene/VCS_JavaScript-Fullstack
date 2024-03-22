import { Schema, model } from "mongoose";

//norint apsisaugoti nuo potencialiu hacker ataku, validuotjame duomenis, nurodome kokie tiktais
const user = model(
  "User",
  new Schema({
    user_name: {
      // Tipo priskyrimas
      type: String,
      //Nurodome, jog vartotojo vardas turi buti nesikartojantis visoje kolekcijoje
      unique: true,
      //Vartotojo vardas minimum triju simboliu ilgio
      minLength: 3,
      // Maximum 50 simboliu
      maxLength: 50,
      //Nurodymas, jog reiksme bus reikalaujama
      required: true,
    },
    photo: {
      type: String,
      maxLength: 80,
    },
    bio: {
      type: String,
      maxLength: 180,
    },
    email: {
      type: String,
      minLength: 5,
      maxLength: 50,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minLength: 6,
      maxLength: 100,
      required: true,
    },
    created_at: {
      type: Date,
      //Reiksmes pagal nutyylejima priskyrimas, jei si nera siunciama
      default: new Date(), // turesime grazinama timestamp'a
    },
  })
);

export default user;
