import { NextRequest, NextResponse } from "next/server";
import { dbConfig } from "@/utils/dbconfig";
import myProductModel from "@/utils/model/productModel";

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
    const { title, image } = await req.json();

    const users = await myProductModel.create({
      title,
      image,
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
