import React, { useRef } from "react";
import TaskDisplace from "./TaskDisplace";
import { createTask } from "./action";

const page = () => {
  const mainAction = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    createTask(title);
  };

  return (
    <div className="border rounded-md min-h-[70vh] m-4 p-4">
      <p>Enter Task</p>

      <div>
        <form action={mainAction}>
          <div className="flex flex-col ">
            <label className="text-[12px] font-semibold mt-5 ">
              Task Title
            </label>
            <input
              name="title"
              placeholder="task title"
              className="border rounded-md w-[300px] pl-2 h-[45px]"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-[300px] text-white bg-neutral-800 h-[45px] rounded-md mt-6"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>

      <div className="my-10">
        <hr />
      </div>

      <TaskDisplace />
    </div>
  );
};

export default page;
