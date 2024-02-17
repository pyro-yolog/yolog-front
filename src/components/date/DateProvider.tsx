"use client";
import { addDays } from "date-fns";
import React, { createContext, useContext, useState } from "react";
import { DateRange } from "react-day-picker";

type Props = {
  children: React.ReactNode;
};

const DateContext = createContext({
  date: {
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  },
  setDate: (date: any) => {},
});

export function useDateContext() {
  const context = useContext(DateContext);
  return context;
}

function DateProvider({ children }: Props) {
  const [date, setDate] = useState({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  });

  return (
    <DateContext.Provider
      value={{ date: { from: date?.from, to: date?.to }, setDate }}
    >
      {children}
    </DateContext.Provider>
  );
}

export default DateProvider;
