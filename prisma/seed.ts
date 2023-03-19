import prisma from "../prisma-client";
import { UserInput } from "../src/resources/users/resolvers/types";

const user: UserInput = {
  firstName: "John",
  lastName: "Doe",
};

const seedDb = async () => {
  await prisma.user.create({
    data: user,
  });
};

seedDb()
  .then(async () => {
    console.log("Seeding done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
