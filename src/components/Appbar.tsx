"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Calendar, ChevronLeftIcon, MenuIcon } from "lucide-react";
import { Tab, Tabs } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Appar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const path = usePathname();
  const [renderName, setRenderName] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (path === "/home") {
      setRenderName("home");
    } else if (path === "/keep") {
      setRenderName("keep");
    }
  }, [path]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
        }}
      >
        {renderName === "home" && (
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{
                  padding: 0,
                }}
                label="여행 일기"
              />
              <Tab
                sx={{
                  padding: 0,
                }}
                label="빠른 메모"
              />
            </Tabs>
            <Box>
              <IconButton
                sx={{ mr: 1 }}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <Calendar />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        )}
        {renderName === "keep" && (
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => router.back()}
            >
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>
    </Box>
  );
}
