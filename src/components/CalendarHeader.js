export default function CalendarHeader({ currentMonth, setCurrentMonth }) {
  return (
    <div className="calendar-header">
      <button onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}>
        Prev
      </button>

      <h2>{currentMonth.format("MMMM YYYY")}</h2>

      <button onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}>
        Next
      </button>
    </div>
  );
}
