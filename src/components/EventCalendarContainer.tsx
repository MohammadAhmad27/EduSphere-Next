import Image from "next/image";
import React from "react";
import EventList from "./EventList";
import EventCalendar from "./EventCalendar";

const EventCalendarContainer = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { date } = searchParams;
  return (
    <div className="bg-white rounded-md p-4">
      <EventCalendar />
      <div className="flex justify-between items-center my-4">
        <h1 className="text-lg font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="students" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        <EventList dateParam={date} />
      </div>
    </div>
  );
};

export default EventCalendarContainer;
