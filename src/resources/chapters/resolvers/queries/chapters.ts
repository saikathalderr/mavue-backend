import { GraphQLError } from "graphql";
import { Chapters } from "../types";

export const chapters: Chapters = async (parent, args, { prisma }) => {
  try {
    const chapters = await prisma.chapter.findMany({
      include: {
        assignedTo: true
      }
    });

    return chapters;
  } catch (error) {
    throw new GraphQLError("Failed to fetch chapters", {
      extensions: {
        code: "INTERNAL_SERVER_ERROR",
      },
    });
  }
};

export default chapters;
