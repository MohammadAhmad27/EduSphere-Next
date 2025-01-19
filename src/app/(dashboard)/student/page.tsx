import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendar from "@/components/EventCalendar";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const StudentPage = async () => {
  const { userId } = await auth();
  console.log(userId);
  const classItem = await prisma.class.findMany({
    where: {
      students: {
        some: {
          id: userId!,
        },
      },
    },
  });
  console.log(classItem);
  return (
    <div className="flex flex-col xl:flex-row gap-4 p-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full rounded-md p-4 bg-white">
          <h1 className="txt-xl font-semibold">Schedule (4A)</h1>
          <BigCalendarContainer type="classId" id={classItem[0].id} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
