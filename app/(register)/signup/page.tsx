// "use client";

import { APP_URL } from "@/utils/constanst";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const page = () => {
  const mainAction = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(name, email, password);
    const URL: string = `${APP_URL}/api/user`;

    await fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
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
          <div className="flex flex-col mb-2">
            <label className="text-[12px] mb-1 font-semibold">Name</label>
            <input
              className="border rounded-md h-[45px] text-[14px] pl-2"
              placeholder="Enter your Name"
              name="name"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-[12px] mb-1 font-semibold">Email</label>
            <input
              className="border rounded-md h-[45px] text-[14px] pl-2"
              placeholder="Enter your Email"
              name="email"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-[12px] mb-1 font-semibold">Password</label>
            <input
              className="border rounded-md h-[45px] text-[14px] pl-2"
              placeholder="Enter your Password"
              name="password"
            />
          </div>

          <button
            type="submit"
            className="border rounded-md mt-4 flex w-full h-[55px] justify-center items-center text-white bg-neutral-900"
          >
            Register
          </button>

          <p className="mt-2 text-[12px] text-center">
            Aleady have an Account{" "}
            <Link href="/signin" className="font-semibold italic">
              Sign in Here
            </Link>
          </p>
        </form>

        <hr />

        <div>
          <p className="mt-2 text-[12px] font-semibold uppercase">
            social sign up
          </p>

          <button className="border rounded-md mt-4 flex w-full h-[55px] justify-center items-center text-white bg-red-600 text-[30px]">
            <FaGoogle />
            {/* <span className="ml-3">Google</span> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
