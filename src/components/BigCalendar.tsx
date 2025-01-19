"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
const localizer = momentLocalizer(moment);

interface dataItem {
  title: string;
  start: Date;
  end: Date;
}

interface dataProps {
  data: dataItem[];
}

const BigCalendar = ({ data }: dataProps) => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const handleOnChnageView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      onView={handleOnChnageView}
      style={{ height: "98%" }}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};

export default BigCalendar;
