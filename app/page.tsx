import { Session, getServerSession } from "next-auth";
import React from "react";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const page = async () => {
  const session: Session | null | any = await getServerSession(options);

  console.log(session?.user?.role);
  if (session?.user?.role === "user") return redirect("/client");
  if (session?.user?.role === "admin") return redirect("/admin");
  if (!session) return redirect("/signin");
};

export default page;
