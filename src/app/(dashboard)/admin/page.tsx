import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

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
        <div className="w-full">{/* CHART */}</div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">RIGHT</div>
    </div>
  );
};

export default AdminPage;
