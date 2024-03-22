import { Schema, model } from "mongoose";
import Like from "./like.js";

// ORM - Object Oriented Modeling. Mongoose'as yra ORM

//norint apsisaugoti nuo potencialiu hacker ataku, validuotjame duomenis, nurodome kokie tiktais
const postSchema = new Schema(
  {
    photo: {
      type: String,
      maxLegth: 80,
      required: true,
    },
    description: {
      type: String,
      maxLength: 2200,
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
  },
  {
    //kad like'u duomenis atvaizduotu, reikalinga si eilute
    toJSON: {
      virtuals: true,
    },
  }
);
// uzdeda ir skaiciuoja like'us
postSchema.virtual("likes", {
  ref: "Like",
  localField: "_id",
  foreignField: "post",
  count: true,
});

const post = model("Post", postSchema);

export default post;
