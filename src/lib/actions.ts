"use server";

import { revalidatePath } from "next/cache";
import { ClassSchema, SubjectSchema } from "./formValidationSchemas";
import prisma from "./prisma";

type CurrentState = { success: boolean; error: boolean };

// create subject
export const createSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    await prisma.subject.create({
      data: {
        name: data.name,
        teachers: {
          connect: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      },
    });
    // revalidatePath("/list/subjects");
    return {
      success: true,
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
    };
  }
};

//update subject
export const updateSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    await prisma.subject.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        teachers: {
          set: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      },
    });
    // revalidatePath("/list/subjects");
    return {
      success: true,
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
    };
  }
};

//delete subject
export const deleteSubject = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.subject.delete({
      where: {
        id: parseInt(id),
      },
    });
    // revalidatePath("/list/subjects");
    return {
      success: true,
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
    };
  }
};

// create subject
export const createClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await prisma.class.create({
      data,
    });
    // revalidatePath("/list/class");
    return {
      success: true,
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
    };
  }
};

//update subject
export const updateClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await prisma.class.update({
      where: {
        id: data.id,
      },
      data,
    });
    // revalidatePath("/list/class");
    return {
      success: true,
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
    };
  }
};

//delete class
export const deleteClass = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.class.delete({
      where: {
        id: parseInt(id),
      },
    });
    // revalidatePath("/list/class");
    return {
      success: true,
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
    };
  }
};
