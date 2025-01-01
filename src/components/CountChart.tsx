"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "#fff",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
];

const CountChart = () => {
  return (
    <div className="w-full h-full rounded-xl p-4 bg-white">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="students" width={20} height={20} />
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              //   label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="male-female"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1 justify-center items-center text-center">
          <div className="w-5 h-5 rounded-full bg-lamaSky"></div>
          <h2 className="font-bold">1234</h2>
          <h3 className="text-gray-300">Boys (55%)</h3>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center text-center">
          <div className="w-5 h-5 rounded-full bg-lamaYellow"></div>
          <h2 className="font-bold">1234</h2>
          <h3 className="text-gray-300">Girls (45%)</h3>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
