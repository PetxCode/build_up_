import { APP_URL } from "@/utils/constanst";
import { revalidateTag } from "next/cache";

export const getTask = async () => {
  const res = await fetch(`${APP_URL}/api/task`);

  const data = await res.json();
  console.log("reading data hmm: ", data);

  return data;
};

export const createTask = async (data: string) => {
  await fetch(`${APP_URL}/api/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: data }),
    next: {
      tags: ["task"],
    },
  });
};
