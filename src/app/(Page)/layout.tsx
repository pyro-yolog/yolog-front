"use client";
import Appbar from "@/components/Appbar";
import Navigation from "@/components/Navigation";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  // className?: string;
};

function layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center h-screen bg-gray-50">
        <div className="flex flex-col items-center justify-center w-screen sm:w-[500px] bg-white">
          <div className="w-full">
            <Appbar />
          </div>
          <div className={`w-full h-full flex items-center justify-center`}>
            {children}
          </div>
          {/* <div className="w-full">
            <Navigation />
          </div> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default layout;
