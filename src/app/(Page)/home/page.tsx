import { Box, SpeedDialIcon, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
type Props = {};

function page({}: Props) {
  return (
    <div className="flex flex-col items-center space-y-6 w-full h-full sm:w-[500px] relative">
      <Link
        href={"/keep"}
        className="drop-shadow-lg border-2 border-black absolute right-4 bottom-4 rounded-full"
      >
        <SpeedDialIcon />
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "20px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            marginY: "8px",
          }}
          variant={"h6"}
        >
          일기 시작하기
        </Typography>
        <Typography sx={{
          textAlign: "center",
          lineHeight: "1.75rem",
        }}>
          나만의 여행 일기를 작성해보세요.<br/>
          시작하려면 더하기 버튼을 탭하세요.
        </Typography>
      </Box>
    </div>
  );
}

export default page;
