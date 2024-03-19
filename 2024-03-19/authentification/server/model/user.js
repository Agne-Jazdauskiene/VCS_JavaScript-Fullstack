// import mongoose from "mongoose";
import { Schema, model } from "mongoose";

//norint apsisaugoti nuo potencialiu hacker ataku, validuotjame duomenis, nurodome kokie tiktais
const user = model(
  "User",
  new Schema({
    user_name: {
      type: String,
      //Nurodome, jog vartotojo vardas turi buti nesikartojantis visoje kolekcijoje
      unique: true,
      //Vartotojo vardas minimum triju simboliu ilgio
      min: 3,
      // Maximum 50 simboliu
      max: 50,
      //Nurodymas, jog reiksme bus reikalaujama
      required: true,
    },
    photo: {
      type: String,
      max: 80,
    },
    bio: {
      type: String,
      max: 180,
    },
    email: {
      type: String,
      min: 5,
      max: 100,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      max: 100,
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
