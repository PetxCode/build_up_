import { Schema, models, model } from "mongoose";
import { iProductData } from "../interface";

const productModel = new Schema<iProductData>(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    image: {
      type: String,
    },

    price: {
      type: Number,
    },
    qty: {
      type: Number,
    },
  },
  { timestamps: true }
);

const myProductModel =
  models.Product || model<iProductData>("Product", productModel);
export default myProductModel;
