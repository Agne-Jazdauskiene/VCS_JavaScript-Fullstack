import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    project_name: {
      type: String,
      minLength: 3,
      maxLength: 200,
      required: true,
    },
    project_photo: {
      type: String,
      maxLength: 80,
      required: true,
    },
    project_description: {
      type: String,
      maxLength: 2000,
      required: true,
    },
    created_at: {
      type: Date,
      default: new Date(),
    },
    consideration_date: {
      type: Date,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    project_status: {
      type: Schema.Types.ObjectId,
      ref: "Status",
    },
  }
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
);

export default model("Project", projectSchema);
