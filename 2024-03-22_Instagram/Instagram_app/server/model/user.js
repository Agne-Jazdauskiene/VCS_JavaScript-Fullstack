import { Schema, model } from "mongoose";

//norint apsisaugoti nuo potencialiu hacker ataku, validuotjame duomenis, nurodome kokie tiktais
const userSchema = new Schema(
  {
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
      // Reikšmės pagal nutylėjimą priskyrimas, jei ši nėra siunčiama
      default: new Date(),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "author",
});

userSchema.virtual("postCount", {
  ref: "Post",
  localField: "_id",
  foreignField: "author",
  count: true,
});

export default model("User", userSchema);
