import { APP_URL } from "@/utils/constanst";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import React from "react";

import { Inter, Poppins, Noto_Serif } from "next/font/google";
import { options } from "@/app/api/auth/[...nextauth]/options";
import AutoPlay from "@/app/components/AuthScroll";

const pop = Poppins({ subsets: ["latin"], weight: "300", style: "normal" });
const noto = Noto_Serif({ subsets: ["latin"], weight: "300", style: "normal" });

const page = async () => {
  const session = await getServerSession(options);

  console.log(session);

  const res = await fetch(`${APP_URL}/api/product`, {
    method: "GET",
    cache: "no-cache",
    next: {
      tags: ["product"],
    },
  });

  const data: any = await res.json();

  // const data: any = [];

  revalidateTag("product");
  return (
    <div>
      <div className="mt-16">This is the Admin Screen view</div>
      <div className="p-4 flex gap-4">
        {data?.data?.map((props: any) => (
          <div
            key={props?._id}
            className="overflow-hidden border rounded-md h-[400px] w-[300px]"
          >
            <Image
              alt={props?.title}
              src={props?.image}
              width={1000}
              height={1000}
              className="w-full h-[90%] border-b object-cover"
            />

            <p className="mt-1 ml-3 capitalize font-semibold">{props?.title}</p>
          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
      <div className="w-[98%]">
        <AutoPlay />
      </div>

      <br />
      <br />
      <br />
      <div className="w-[98%]">
        <p className={pop.className}>This is the Best Font</p>
      </div>
      <div className="w-[98%]">
        <p className={noto.className}>This is the Best Font</p>
      </div>
    </div>
  );
};

export default page;
