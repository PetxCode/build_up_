import { dbConfig } from "@/utils/dbconfig";
import { iProduct } from "@/utils/interface";
import myProductModel from "@/utils/model/productModel";
import myUserModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

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

export const POST = async (req: NextRequest, params: any) => {
  try {
    await dbConfig();
    const { title, image }: iProduct = await req.json();

    const { userID } = await params.params;
    const user = await myUserModel.findById(userID);
    if (user.role === "admin") {
      const users = await myProductModel.create({
        title,
        image,
      });

      return NextResponse.json({
        status: 201,
        message: "creating all User",
        data: users,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "Error: You do not have right for this",
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: 404,
      message: "Error",
      error: error.message,
    });
  }
};
