import dayjs from "dayjs";
import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  return (
    <div className="calendar-wrapper">
      <div className="calendar-card">
        <CalendarHeader
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <CalendarGrid currentMonth={currentMonth} />
      </div>
    </div>
  );
}
