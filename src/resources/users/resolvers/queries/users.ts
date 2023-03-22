import { GraphQLError } from "graphql";
import { Users } from "../types";

export const users: Users = async (parent, args, { prisma }) => {
  try {
    return await prisma.user.findMany({
      where: {},
      include: {
        Chapter: true
      }
    });
  } catch (error) {
    throw new GraphQLError("Failed to fetch users", {
      extensions: {
        code: "INTERNAL_SERVER_ERROR",
      },
    });
  }
};

export default users;
