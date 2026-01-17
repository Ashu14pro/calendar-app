import dayjs from "dayjs";

export default function DayCell({ day, currentMonth, events }) {
  const isToday = day.isSame(dayjs(), "day");
  const dayEvents = events.filter(e =>
    dayjs(e.date).isSame(day, "day")
  );

  return (
    <div className={`day-cell ${isToday ? "today" : ""}`}>
      <div className="day-number">{day.date()}</div>

      {dayEvents.map((event, i) => (
        <div
          key={i}
          className="event"
          style={{ backgroundColor: event.color }}
        >
          {event.title}
        </div>
      ))}
    </div>
  );
}
