import { GraphQLError } from "graphql";
import { DeleteUser } from "../../types";
import { validate } from "./validation/validate";

export const Delete: DeleteUser = async (_, args, { prisma }) => {
    const { id } = await validate(args.input);

    try {
        return await prisma.user.delete({
            where: {
                id
            }
        })
    } catch (error) {
        throw new GraphQLError("Failed to delete user", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};

export default Delete;
