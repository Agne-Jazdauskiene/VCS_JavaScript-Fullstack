import { Schema, model } from "mongoose";

const statusSchema = new Schema(
  {
    project_status: {
      type: String,
    },
  }
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
);

export default model("Status", statusSchema);
