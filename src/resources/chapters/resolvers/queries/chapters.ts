import { GraphQLError } from "graphql";
import { Chapters } from "../types";

export const chapters: Chapters = async (parent, args, { prisma }) => {
    try {
        return await prisma.chapter.findMany({
            where: {},
            include: {
                assignedTo: true
            }
        })
    } catch (error) {
        throw new GraphQLError("Failed to fetch users", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};

export default chapters;
