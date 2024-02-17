import Navigation from "@/components/Navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function layout({ children, className }: Props) {
  return (
    <div className="flex justify-center h-screen bg-orange-50">
      <div className="flex flex-col items-center justify-center w-screen sm:w-[500px] bg-white">
        <div className={`${className} w-full h-full`}>{children}</div>
        <div className="w-full">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default layout;
