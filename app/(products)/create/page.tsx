import cloudinary from "@/utils/cloudinary";
import { APP_URL } from "@/utils/constanst";
import { redirect } from "next/navigation";
import React from "react";
import { MdPhoto } from "react-icons/md";

const page = async () => {
  const mainAction = async (formData: FormData) => {
    "use server";
    const title = formData.get("title");
    const image = formData.get("image") as File;

    const file = await image.arrayBuffer();
    const buff = new Uint8Array(file);

    const { secure_url }: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (err, result) => {
          if (err) {
            reject(err);
            return;
          } else {
            return resolve(result);
          }
        })
        .end(buff);
    });

    const URL: string = `${APP_URL}/api/product`;

    await fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title, image: secure_url }),
      next: {
        tags: ["product"],
      },
    }).then(() => {
      redirect("/");
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border w-[400px] rounded-md p-4">
        <p className="uppercase font-semibold mb-5 ">Registration Screen</p>
        <hr />
        <br />
        <br />
        <form className="mb-4" action={mainAction}>
          <div className="flex w-[100%] items-center  h-[100%]">
            <div className="flex flex-1 flex-col mb-2">
              <label className="text-[12px] mb-1 font-semibold">Title</label>
              <input
                className="border rounded-md h-[45px] text-[14px] pl-2"
                placeholder="Enter your Title"
                name="title"
              />
            </div>

            <div className="flex flex-col mt-4 cursor-pointer">
              <label
                htmlFor="id"
                className="mb-1 cursor-pointer font-semibold text-[25px] ml-4"
              >
                <MdPhoto />
              </label>
              <input
                type="file"
                id="id"
                className=" hidden border rounded-md h-[45px] text-[14px] pl-2"
                placeholder="Enter your Email"
                name="image"
              />
            </div>
          </div>

          <button
            type="submit"
            className="border rounded-md mt-4 flex w-full h-[55px] justify-center items-center text-white bg-neutral-900"
          >
            Add Product
          </button>
        </form>

        <hr />
      </div>
    </div>
  );
};

export default page;
