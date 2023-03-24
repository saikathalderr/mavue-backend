import { GraphQLError } from "graphql";
import { Update } from "../../types";
import { validate } from "./validation/validate";

export const create: Update = async (_, args, { prisma }) => {
    const { id } = args
    const { text, userId } = await validate(args.input);

  try {
    const user = await prisma.chapter.update({
      where: {
        id
      },
      data: {
        text,
        userId
      },
      include: {
        assignedTo: true
      }
    });

    console.info(`[CronJob]: trigger notification for user - ${userId}`);

    return user;
  } catch (error) {
    throw new GraphQLError("Failed to update chapter", {
      extensions: {
        code: "INTERNAL_SERVER_ERROR",
      },
    });
  }
};

export default create;
