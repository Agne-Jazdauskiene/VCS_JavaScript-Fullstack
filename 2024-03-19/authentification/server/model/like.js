// import mongoose from "mongoose";
import { Schema, model } from "mongoose";

//norint apsisaugoti nuo potencialiu hacker ataku, validuotjame duomenis, nurodome kokie tiktais
const user = model(
  "User",
  new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    created_at: {
      type: Date,
      //Reiksmes pagal nutyylejima priskyrimas, jei si nera siunciama
      default: new Date(), // turesime grazinama timestamp'a
    },
  })
);

export default user;
