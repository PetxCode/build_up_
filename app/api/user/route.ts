import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConfig } from "@/utils/dbconfig";
import myUserModel from "@/utils/model/userModel";

export const GET = async () => {
  try {
    await dbConfig();

    const users = await myUserModel.find();
    return NextResponse.json({
      status: 200,
      message: "reading all Users",
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
    const { email, password, name } = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const users = await myUserModel.create({
      email,
      password: hashed,
      name,
      role: "user",
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
