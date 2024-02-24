"use client";
import DateConfigModal from "@/components/date/DateConfigModal";
import { Global } from "@emotion/react";
import {
  Box,
  Button,
  Skeleton,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";

type Props = {};

const drawerBleeding = 56;

function Keep({}: Props) {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const [viewDrawer, setViewDrawer] = React.useState(false);

  useLayoutEffect(() => {
    if (!window) {
      return;
    }

    return () => {};
  }, []);

  return (
    <>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
            backgroundColor: "white",
          },
        }}
      />
      <Box
        // sx={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "start",
        //   width: "100%",
        //   height: "100%",
        //   padding: "20px",
        // }}
        className="relaive flex flex-col justify-start h-full w-full sm:w-[500px] p-[20px]"
      >
        {value === 0 && (
          <>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
              variant={"h6"}
            >
              어디로 여행을 가시나요?
            </Typography>
            <TextField id="standard-basic" label="여행지" variant="standard" />
            <Button
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-[500px]"
              onClick={() => setValue(1)}
            >
              다음
            </Button>
          </>
        )}
        {value === 1 && (
          <>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
              variant={"h6"}
            >
              얼마나 여행을 떠나나요?
            </Typography>
            <DateConfigModal className="flex mt-6 w-full justify-center" />
            <TextField id="standard-basic" label="여행지" variant="standard" />
            <Button
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-[500px]"
              onClick={() => setValue(2)}
            >
              다음
            </Button>
          </>
        )}
        {value === 2 && (
          <>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
              variant={"h6"}
            >
              일기장 이름은 무엇으로 할까요?
            </Typography>
            <TextField
              id="standard-basic"
              label="일기장 이름"
              variant="standard"
            />
            <DateConfigModal className="flex mt-6 w-full justify-center" />
            <TextField id="standard-basic" label="여행지" variant="standard" />
            <Button
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-[500px]"
              onClick={() => setViewDrawer(true)}
            >
              다음
            </Button>
          </>
        )}
        {viewDrawer && (
          <SwipeableDrawer
            container={window.document.body}
            anchor="bottom"
            open={viewDrawer}
            onClose={() => setViewDrawer(false)}
            onOpen={() => setViewDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: "visible",
                backgroundColor: "white",
                right: 0,
                left: 0,
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 6,
                  backgroundColor: "black",
                  borderRadius: 3,
                  position: "absolute",
                  top: 8,
                  left: "calc(50% - 15px)",
                }}
              />
              <Typography sx={{ p: 2, color: "black", fontWeight: "bold" }}>
                일기 쓰기 알림 설정하기
              </Typography>
            </Box>
            <Box
              sx={{
                px: 2,
                pb: 2,
                height: "100%",
                overflow: "auto",
                backgroundColor: "white",
              }}
            >
              <Skeleton variant="rectangular" height="100%" />
            </Box>
          </SwipeableDrawer>
        )}
      </Box>
    </>
  );
}

export default Keep;
