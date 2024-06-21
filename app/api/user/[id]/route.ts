import { dbConfig } from "@/utils/dbconfig";
import { iUser } from "@/utils/interface";
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

export const PATCH = async (req: NextRequest, params: any) => {
  try {
    await dbConfig();
    const { avatar }: iUser = await req.json();

    const { id } = await params.params;

    const user = await myUserModel.findById(id);
    console.log(user);

    if (user) {
      const users = await myUserModel.findByIdAndUpdate(
        id,
        {
          avatar,
        },
        { new: true }
      );

      return NextResponse.json({
        status: 201,
        message: "updating User",
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
