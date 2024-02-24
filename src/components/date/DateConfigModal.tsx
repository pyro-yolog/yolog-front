"use client"
import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useDateContext } from "./DateProvider";

export default function DateConfigModal({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {

  const { date, setDate } = useDateContext()

  return (
    <div className={cn(className)}>
      <Button
        id="date"
        variant={"outline"}
        className={cn(
          "w-[330px] justify-start text-left font-normal",
          !date && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date?.from ? (
          date.to ? (
            <>
              {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
            </>
          ) : (
            format(date.from, "LLL dd, y")
          )
        ) : (
          <span>Pick a date</span>
        )}
      </Button>
    </div>
  );
}
