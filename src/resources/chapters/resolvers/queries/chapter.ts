import { GraphQLError } from "graphql";
import { ChapterById } from "../types";

export const chapter: ChapterById = async (parent, args, { prisma }) => {
  try {
    const { id } = args;
    return await prisma.chapter.findFirst({
      where: {
        id,
      },
      include: {
        assignedTo: true,
      },
    });
  } catch (error) {
    throw new GraphQLError("Failed to fetch chapter", {
      extensions: {
        code: "INTERNAL_SERVER_ERROR",
      },
    });
  }
};

export default chapter;
