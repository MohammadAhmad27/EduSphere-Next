import prisma from "@/lib/prisma";
import React from "react";

const EventList = async ({ dateParam }: { dateParam: string | undefined }) => {
  const date = dateParam ? new Date(dateParam) : new Date();
  console.log(date);

  const data = await prisma.event.findMany({
    where: {
      startTime: {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lte: new Date(date.setHours(23, 59, 59, 599)),
      },
    },
  });
  return (
    <div>
      {data.map((event) => (
        <div
          key={event.id}
          className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-gray-600 font-semibold">{event.title}</h2>
            <p className="text-gray-300 text-xs">
              {event.startTime.toLocaleTimeString("en-UK", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </p>
          </div>
          <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
