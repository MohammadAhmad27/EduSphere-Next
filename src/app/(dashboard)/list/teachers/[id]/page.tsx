import Announcements from "@/components/Announcements";
import FormContainer from "@/components/FormContainer";
import prisma from "@/lib/prisma";
import { Teacher } from "@prisma/client";
import { role as getRole } from "@/lib/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BigCalendarContainer from "@/components/BigCalendarContainer";

const Performance = dynamic(() => import("@/components/Performance"), {
  ssr: false,
  loading: () => <div className="mt-10">Loading Performance Chart...</div>,
});

const SingleTeacherPage = async ({ params }: { params: { id: string } }) => {
  // fetching role
  const role = await getRole();
  console.log(role);
  // fetching teacher
  const teacher:
    | (Teacher & {
        _count: { subjects: number; lessons: number; classes: number };
      })
    | null = await prisma.teacher.findUnique({
    where: {
      id: params.id,
    },
    include: {
      _count: {
        select: {
          subjects: true,
          classes: true,
          lessons: true,
        },
      },
    },
  });
  console.log(teacher);
  if (!teacher) return notFound();
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
                src={teacher?.img || "/noAvatar.png"}
                alt="teacher-profile"
                width={120}
                height={120}
                className="object-cover rounded-full"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">
                  {teacher?.name + " " + teacher?.surname}
                </h1>
                {role === "admin" && (
                  <FormContainer table="teacher" type="update" data={teacher} />
                )}
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <div className="flex justify-between items-center gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="blood" width={14} height={14} />
                  <span>{teacher?.bloodType}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="date" width={14} height={14} />
                  <span>
                    {new Intl.DateTimeFormat("en-GB").format(teacher?.birthday)}
                  </span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="mail" width={14} height={14} />
                  <span>{teacher?.email || "-"}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="phone" width={14} height={14} />
                  <span>{teacher?.phone}</span>
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
                <h1 className="text-xl font-semibold">
                  {teacher?._count.subjects}
                </h1>
                <span className="text-sm text-gray-400">Branches</span>
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
                <h1 className="text-xl font-semibold">
                  {teacher?._count.lessons}
                </h1>
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
                <h1 className="text-xl font-semibold">
                  {teacher?._count.lessons}
                </h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="p-4 mt-4 bg-white rounded-md h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendarContainer type="teacherId" id={teacher.id} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded0-md bg-lamaSkyLight"
              href={`/list/classes/?supervisorId=${"teacher2"}`}
            >
              Teacher&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded0-md bg-lamaPurpleLight"
              href={`/list/students/?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Students
            </Link>
            <Link
              className="p-3 rounded0-md bg-lamaYellowLight"
              href={`/list/lessons/?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Lessons
            </Link>
            <Link
              className="p-3 rounded0-md bg-pink-50"
              href={`/list/exams/?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Exams
            </Link>
            <Link
              className="p-3 rounded0-md bg-lamaSkyLight"
              href={`/list/assignments/?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Assignments
            </Link>
          </div>
          <Performance />
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
