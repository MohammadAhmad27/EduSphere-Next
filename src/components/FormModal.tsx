"use client";
import { deleteClass, deleteSubject, deleteTeacher, deleteStudent } from "@/lib/actions";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { FormContainerProps } from "./FormContainer";

// Delete Actions
const deleteActionMap: any = {
  subject: deleteSubject,
  class: deleteClass,
  teacher: deleteTeacher,
  student: deleteStudent,
  // exam: deleteExam,
  // TODO: OTHER DELETE ACTIONS
  parent: deleteSubject,
  lesson: deleteSubject,
  assignment: deleteSubject,
  result: deleteSubject,
  attendance: deleteSubject,
  event: deleteSubject,
  announcement: deleteSubject,
};

// All Forms
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <div>Loading...</div>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <div>Loading...</div>,
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <div>Loading...</div>,
});
const ClassForm = dynamic(() => import("./forms/ClassForm"), {
  loading: () => <div>Loading...</div>,
});

// Conditional rendering
const forms: {
  [key: string]: (
    setOpen: Dispatch<SetStateAction<boolean>>,
    type: "create" | "update",
    data?: any,
    relatedData?: any
  ) => JSX.Element;
} = {
  teacher: (setOpen, type, data, relatedData) => (
    <TeacherForm
      setOpen={setOpen}
      type={type}
      data={data}
      relatedData={relatedData}
    />
  ),
  student: (setOpen, type, data, relatedData) => (
    <StudentForm
      setOpen={setOpen}
      type={type}
      data={data}
      relatedData={relatedData}
    />
  ),
  subject: (setOpen, type, data, relatedData) => (
    <SubjectForm
      setOpen={setOpen}
      type={type}
      data={data}
      relatedData={relatedData}
    />
  ),
  class: (setOpen, type, data, relatedData) => (
    <ClassForm
      setOpen={setOpen}
      type={type}
      data={data}
      relatedData={relatedData}
    />
  ),
};

const FormModal = ({
  table,
  type,
  data,
  id,
  relatedData,
}: FormContainerProps & { relatedData?: any }) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";
  // Modal
  const [open, setOpen] = useState(false);

  const Form = () => {
    const router = useRouter();

    const [state, formAction] = useFormState(deleteActionMap[table], {
      success: false,
      error: false,
    });

    useEffect(() => {
      if (state.success) {
        toast(`${table} has been deleted!`);
        setOpen(false);
        router.refresh();
      }
    }, [state]);

    if (type === "delete" && id) {
      return (
        <form action={formAction} className="p-4 flex flex-col gap-4">
          <input
            type="text | number"
            placeholder="hidden"
            name="id"
            value={id}
            className="hidden"
          />
          <span className="text-center font-medium">
            All data will be lost. Are you sure you want to delete this {table}?
          </span>
          <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
            Delete
          </button>
        </form>
      );
    } else if ((type === "create" || type === "update") && forms[table]) {
      return forms[table](setOpen, type, data, relatedData);
    } else {
      return <div className="text-center text-red-600">Form not found!</div>;
    }
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} width={16} height={16} alt="icon" />
        <span className="hidden">button</span>
      </button>
      {open && (
        <div className="h-screen w-screen absolute top-0 left-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="close-icon" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
