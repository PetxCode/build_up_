import { Schema, models, model } from "mongoose";
import { iUserData } from "../interface";

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const myUserModel = models.User || model<iUserData>("User", userModel);
export default myUserModel;
