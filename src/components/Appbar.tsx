import React from "react";
import { Button } from "./ui/button";
import { Bell, CircleUser, Settings } from "lucide-react";
import Image from "next/image";

type Props = {};

function Appbar({}: Props) {
  return (
    <div className="grid grid-cols-3 border-b border-[#B1C5A1] w-full place-items-center h-16">
      <div className="mr-auto">
        <Button className="bg-white w-fit">
          <Bell className="text-[#9AA985]" />
        </Button>
        <Button className="bg-white w-fit">
          <Settings className="text-[#9AA985]" />
        </Button>
      </div>
      <div className="mx-auto">
        <Image src={"/logo.png"} alt="logo" width={48} height={48} />
      </div>
      <Button className="bg-white w-fit ml-auto">
        <CircleUser className="text-[#9AA985]" />
      </Button>
    </div>
  );
}

export default Appbar;
