import { GraphQLError } from "graphql";
import { Create } from "../../types";
import { validate } from "./validation/validate";

export const create: Create = async (_, args, { prisma }) => {
  const { title, requirements, recurringInterval } = await validate(args.input);

  try {
    const user = await prisma.chapter.create({
      data: {
        title,
        requirements,
        recurringInterval,
        userId: '',
        text: ''
      },
    });

    return user;
  } catch (error) {
    throw new GraphQLError("Failed to create user", {
      extensions: {
        code: "INTERNAL_SERVER_ERROR",
      },
    });
  }
};

export default create;
