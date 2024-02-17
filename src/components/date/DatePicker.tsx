"use client"
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useDateContext } from "./DateProvider";
import "@/app/globals.scss"

export default function DatePicker() {
  const { date, setDate } = useDateContext()

  return (
    <Calendar
      initialFocus
      mode="range"
      defaultMonth={date?.from}
      selected={date}
      onSelect={setDate}
    />
  );
}
