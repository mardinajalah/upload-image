import { prisma } from "@/lib/prisma";

export const getImage = async () => {
  try {
    const result = await prisma.upload.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};

export const getImageById = async (id: string) => {
  try {
    const result = await prisma.upload.findUnique({
      where: {
        id
      }
    });
    return result;
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};
