import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import prisma from "../prisma-client";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { join } from "node:path";
import { userMutations, userQueries } from "./resources/users";

const startApolloServer = async () => {
  const schema = loadSchemaSync(join(__dirname, "schema.graphql"), {
    loaders: [new GraphQLFileLoader()],
  });
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
      Mutation: {
        ...userMutations,
      },
      Query: {
        ...userQueries,
      },
    },
  });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token, prisma }),
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at ${url}`);
};

startApolloServer().catch((error) => {
  console.log("Caught an error will starting the express server", error);
});
