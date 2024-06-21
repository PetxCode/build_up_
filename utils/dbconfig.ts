import { connect } from "mongoose";
import { URL } from "./constanst";

export const dbConfig = async () => {
  try {
    await connect(URL).then(() => {
      console.clear();
      console.log("Connected 🚀🚀❤️❤️");
    });
  } catch (error) {
    console.error(error);
  }
};
