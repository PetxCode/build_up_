import { NextRequest, NextResponse } from "next/server";
import { dbConfig } from "@/utils/dbconfig";
import myTaskModel from "@/utils/model/taskModel";

export const GET = async () => {
  try {
    await dbConfig();

    const users = await myTaskModel.find();
    return NextResponse.json({
      status: 200,
      message: "reading all task",
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
    const { title } = await req.json();

    const tasks = await myTaskModel.create({
      title,
    });

    return NextResponse.json({
      status: 200,
      message: "creating all task",
      data: tasks,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};
