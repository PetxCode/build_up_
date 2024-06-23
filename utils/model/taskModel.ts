import { Schema, models, model } from "mongoose";
import { iTaskData, iUserData } from "../interface";

const taskModel = new Schema<iTaskData>(
  {
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

const myTaskModel = models.Task || model<iTaskData>("Task", taskModel);
export default myTaskModel;
