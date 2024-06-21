import { dbConfig } from "@/app/utils/dbconfig";
import myUserModel from "@/app/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import myProductModel from "@/app/utils/model/productModel";

export const GET = async () => {
  try {
    await dbConfig();

    const users = await myProductModel.find();
    return NextResponse.json({
      status: 200,
      message: "reading all Product",
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { title, price, image, desc, qty } = await req.json();

    const users = await myProductModel.create({
      title,
      price,
      image,
      desc,
      qty,
    });

    return NextResponse.json({
      status: 200,
      message: "creating all User",
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};
