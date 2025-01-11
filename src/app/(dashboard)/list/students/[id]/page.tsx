import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Performance = dynamic(() => import("@/components/Performance"), {
  ssr: false,
  loading: () => <div className="mt-10">Loading Performance Chart...</div>,
});

const SingleStudentPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 xl:flex-row p-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="flex-1 flex gap-4 rounded-md px-4 py-6 bg-lamaSky">
            <div className="w-1/3">
              <Image
                src="/profile.jpeg"
                alt="profile"
                width={144}
                height={144}
                className="size-36 object-cover rounded-full"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">M.Ahmad</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <div className="flex justify-between items-center gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="blood" width={14} height={14} />
                  <span>AB+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="date" width={14} height={14} />
                  <span>January, 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="mail" width={14} height={14} />
                  <span>ahmad@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="phone" width={14} height={14} />
                  <span>03085757128</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex justify-between flex-wrap gap-4">
            {/* CARD */}
            <div className="bg-white w-full md:w-[48%] xl:w-[45%] lg:w-[45%] 2xl:w-[48%] flex gap-4 rounded-md p-4">
              <Image
                src="/singleAttendance.png"
                alt="singleAttendance"
                width={24}
                height={24}
                className="size-6 object-cover rounded-md"
              />
              <div className="fle flex-col gap-2">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div className="bg-white w-full md:w-[48%] xl:w-[45%] lg:w-[45%] 2xl:w-[48%] flex gap-4 rounded-md p-4">
              <Image
                src="/singleBranch.png"
                alt="singleBranch"
                width={24}
                height={24}
                className="size-6 object-cover rounded-md"
              />
              <div className="fle flex-col gap-2">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            <div className="bg-white w-full md:w-[48%] xl:w-[45%] lg:w-[45%] 2xl:w-[48%] flex gap-4 rounded-md p-4">
              <Image
                src="/singleLesson.png"
                alt="singleLesson"
                width={24}
                height={24}
                className="size-6 object-cover rounded-md"
              />
              <div className="fle flex-col gap-2">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            <div className="bg-white w-full md:w-[48%] xl:w-[45%] lg:w-[45%] 2xl:w-[48%] flex gap-4 rounded-md p-4">
              <Image
                src="/singleClass.png"
                alt="singleClass"
                width={24}
                height={24}
                className="size-6 object-cover rounded-md"
              />
              <div className="fle flex-col gap-2">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="p-4 mt-4 bg-white rounded-md h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded0-md bg-lamaSkyLight"
              href={`/list/lessons?classId=${2}`}
            >
              Student&apos;s Lessons
            </Link>
            <Link
              className="p-3 rounded0-md bg-lamaPurpleLight"
              href={`/list/teachers?classId=${2}`}
            >
              Student&apos;s Teachers
            </Link>
            <Link
              className="p-3 rounded0-md bg-pink-50"
              href={`/list/exams?classId=${2}`}
            >
              Student&apos;s Exams
            </Link>
            <Link
              className="p-3 rounded0-md bg-lamaSkyLight"
              href={`/list/assignments?classId=${2}`}
            >
              Student&apos;s Assignments
            </Link>

            <Link
              className="p-3 rounded0-md bg-lamaYellowLight"
              href={`/list/results?studentId=${"student2"}`}
            >
              Student&apos;s Results
            </Link>
          </div>
          <Performance />
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
