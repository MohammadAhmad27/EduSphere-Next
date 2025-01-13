import { auth } from "@clerk/nextjs/server";

export const role = async () => {
  const { sessionClaims } = await auth();
  return (sessionClaims?.metadata as { role?: string })?.role;
};

export const currentUserId = async () => {
  const { userId } = await auth();
  return userId;
};
