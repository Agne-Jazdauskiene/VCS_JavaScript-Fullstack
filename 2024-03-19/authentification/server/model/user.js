// import mongoose from "mongoose";

import { Schema, model } from "mongoose";

model(
  "User",
  new Schema({
    user_name: String,
  })
);

// const User = mongoose.model("User", {
//   name: String,
//   last_name: String,
//   email: String,
//   password: String,
//   photo: String,
// });

// export default User;
