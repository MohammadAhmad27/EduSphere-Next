import React from "react";
import dynamic from "next/dynamic";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import UserCard from "@/components/UserCard";

const CountChart = dynamic(() => import("@/components/CountChart"), {
  ssr: false,
  loading: () => <div>Loading Count Chart...</div>,
});
const AttendanceChart = dynamic(() => import("@/components/AttendanceChart"), {
  ssr: false,
  loading: () => <div>Loading Attendance Chart...</div>,
});
const FinanceChart = dynamic(() => import("@/components/FinanceChart"), {
  ssr: false,
  loading: () => <div>Loading Finance Chart...</div>,
});

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARD */}
        <div className="flex justify-between gap-4 flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHART */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
