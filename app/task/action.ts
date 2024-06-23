import { APP_URL } from "@/utils/constanst";
import { revalidateTag } from "next/cache";

export const getTask = async () => {
  const res = await fetch(`${APP_URL}/api/task`, {
    cache: "no-cache",
    next: {
      tags: ["task"],
    },
  });

  return await res.json();
};

export const createTask = async (title: string) => {
  await fetch(`${APP_URL}/api/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  revalidateTag("task");
};

export const mainAction = async (prevState: any, queryData: FormData) => {
  const name = queryData.get("title") as string;

  /// Validate the name | you can use zod for validation
  if (!name || name.trim() === "") {
    return {
      name: "",
      error: "Name is required",
      status: false,
    };
  }

  /// Save the name to the database
  console.log(name);

  return {
    name: "",
    error: "",
    status: true,
  };
};
