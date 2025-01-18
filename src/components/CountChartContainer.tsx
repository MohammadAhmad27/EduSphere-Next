import React from "react";
import CountChart from "./CountChart";
import Image from "next/image";
import prisma from "@/lib/prisma";

const CountChartContainer = async () => {
  const data = await prisma.student.groupBy({
    by: ["sex"],
    _count: true,
  });
  const boys = data.find((d: any) => d.sex === "MALE")?._count || 0;
  const girls = data.find((d: any) => d.sex === "FEMALE")?._count || 0;

  // Calculate total students and their percentages
  const total = data.reduce((acc, curr) => acc + curr._count, 0);
  const boysPercentage = Math.round((boys / total) * 100);
  const girlsPercentage = Math.round((girls / total) * 100);

  return (
    <div className="w-full h-full rounded-xl p-4 bg-white">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="students" width={20} height={20} />
      </div>
      {/* CHART */}
      <CountChart boys={boys} girls={girls} />
      {/* LEGEND*/}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1 justify-center items-center text-center">
          <div className="w-5 h-5 rounded-full bg-lamaSky"></div>
          <h2 className="font-bold">{boys}</h2>
          <h3 className="text-gray-300">Boys {boysPercentage}%</h3>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center text-center">
          <div className="w-5 h-5 rounded-full bg-lamaYellow"></div>
          <h2 className="font-bold">{girls}</h2>
          <h3 className="text-gray-300">Girls {girlsPercentage}%</h3>
        </div>
      </div>
    </div>
  );
};

export default CountChartContainer;
