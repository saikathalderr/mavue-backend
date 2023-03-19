import { GraphQLError } from "graphql";
import { Create } from "../../types";
import { validate } from "./validation/validate";

export const create: Create = async (_, args, { prisma }) => {
  const { firstName, lastName } = await validate(args.input);

  try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
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
