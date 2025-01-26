import prisma from "@/lib/prisma";
import React from "react";

const StudentAttendanceCard = async ({ id }: { id: string }) => {
  const attendance = await prisma.attendance.findMany({
    where: {
      studentId: id,
      date: {
        gte: new Date(new Date().getFullYear(), 0, 1),
      },
    },
  });
  console.log(attendance);
  const totalDays = attendance.length;
  const presentDays = attendance.filter((day) => day.present).length;
  const percentage = Math.round(presentDays / totalDays) * 100;
  return (
    <div className="fle flex-col gap-2">
      <h1 className="text-xl font-semibold">{percentage}%</h1>
      <span className="text-sm text-gray-400">Attendance</span>
    </div>
  );
};

export default StudentAttendanceCard;
