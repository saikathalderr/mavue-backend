import { GraphQLError } from "graphql";
import { Create } from "../../types";
import { validate } from "./validation/validate";

export const create: Create = async (_, args, { prisma }) => {
  const { requirements, text, title, recurringInterval, userId } =
    await validate(args.input);

  try {
    const chapter = await prisma.chapter.create({
      data: {
        text,
        title,
        recurringInterval,
        requirements,
        userId
      },
      include: {
        assignedTo: true
      }
    });

    console.log(`[CronJob] - will trigger notification for user - ${userId}`);

    return chapter;
  } catch (error) {
    throw new GraphQLError("Failed to create chapter", {
      extensions: {
        code: "INTERNAL_SERVER_ERROR",
      },
    });
  }
};

export default create;
