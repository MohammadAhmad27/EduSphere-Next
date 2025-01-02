import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

const StudentPage = () => {
  return (
    <div className="flex-1 flex flex-col xl:flex-row gap-4 p-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full rounded-md p-4 bg-white">
          <h1 className="txt-xl font-semibold">Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
