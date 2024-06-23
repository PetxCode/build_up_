"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { MdCreate, MdPerson, MdTaskAlt } from "react-icons/md";

const Header = () => {
  const session = useSession();

  let user: undefined | {} = undefined;
  user = session.data?.user;

  console.log(user);

  const main = [
    {
      id: 1,
      name: "Task",
      url: "/task",
      icon: <MdTaskAlt />,
    },
    {
      id: 2,
      name: "People",
      url: "/people",
      icon: <MdPerson />,
    },
    {
      id: 3,
      name: "Create",
      url: "/create",
      icon: <MdCreate />,
    },
  ];
  return (
    <div className="flex justify-center items-center w-full h-[70px] border-b">
      <div className="flex w-[90%] justify-between items-center">
        <Link href="/">Logo</Link>
        <div className="flex items-center gap-2">
          {main.map((props) => (
            <Link
              href={props.url}
              key={props?.id}
              className="flex gap-2 items-center border rounded-md px-4 py-2 cursor-pointer"
            >
              <div>{props.icon}</div>
              <p>{props.name}</p>
            </Link>
          ))}
        </div>
        {user ? (
          <div
            className="flex gap-2 items-center border rounded-md px-4 py-2 cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            Log Out
          </div>
        ) : (
          <Link
            href="/signin"
            className="flex gap-2 items-center border rounded-md px-4 py-2 cursor-pointer"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
