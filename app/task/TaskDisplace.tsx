import React from "react";
import { getTask } from "./action";
import { revalidateTag } from "next/cache";

const TaskDisplace = async () => {
  const taskData = await getTask();
  //   revalidateTag("task");
  console.log("tasked: ", taskData);
  return (
    <div>
      <p className="my-5">Tasks Displayed</p>
      <div className="flex flex-wrap w-full">
        {taskData?.data?.map((props: any) => (
          <div key={props._id} className="p-4 border rounded-md ">
            {props?.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskDisplace;
