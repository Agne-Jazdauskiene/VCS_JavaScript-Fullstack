import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    user_name: {
      type: String,
      minLength: 3,
      maxLength: 70,
      required: true,
    },
    last_name: {
      type: String,
      minLength: 3,
      maxLength: 100,
      required: true,
    },
    party_name: {
      type: String,
      minLength: 3,
      maxLength: 150,
      required: true,
    },
    email: {
      type: String,
      minLength: 5,
      maxLength: 100,
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
      default: new Date(),
    },
    manager: {
      type: String,
      minLength: 3,
      maxLength: 150,
      unique: true,
    },
  }
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
);

export default model("User", userSchema);
