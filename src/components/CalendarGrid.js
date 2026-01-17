import dayjs from "dayjs";
import DayCell from "./DayCell";
import events from "../data/events";

export default function CalendarGrid({ currentMonth }) {
  const startOfMonth = currentMonth.startOf("month");
  const startDay = startOfMonth.day();
  const days = [];

  for (let i = startDay - 1; i >= 0; i--) {
    days.push(startOfMonth.subtract(i + 1, "day"));
  }

  for (let i = 1; i <= currentMonth.daysInMonth(); i++) {
    days.push(startOfMonth.date(i));
  }

  while (days.length < 42) {
    days.push(days[days.length - 1].add(1, "day"));
  }

  return (
    <div className="calendar-grid">
      {days.map((day, index) => (
        <DayCell
          key={index}
          day={day}
          currentMonth={currentMonth}
          events={events}
        />
      ))}
    </div>
  );
}
