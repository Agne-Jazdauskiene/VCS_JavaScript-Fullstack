// import mongoose from "mongoose";
import { Schema, model } from "mongoose";

// ORM - Object Oriented Modeling. Mongoose'as yra ORM

//norint apsisaugoti nuo potencialiu hacker ataku, validuotjame duomenis, nurodome kokie tiktais
const user = model(
  "Post",
  new Schema({
    photo: {
      type: String,
      max: 80,
      required: true,
    },
    description: {
      type: String,
      max: 600,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    created_at: {
      type: Date,
      //Reiksmes pagal nutyylejima priskyrimas, jei si nera siunciama
      default: new Date(), // turesime grazinama timestamp'a
    },
  })
);

export default post;
