import { ChapterCreateInput } from "../src/resources/chapters/resolvers/types";
import { UserInput } from "../src/resources/users/resolvers/types";
import prisma from "../prisma-client";

const user: UserInput = {
  firstName: "John",
  lastName: "Doe",
};

const ChapterOne: ChapterCreateInput = {
  title: 'test chapter one',
  recurringInterval: 1,
  requirements: 'some requirements of test chapter one'
}
const ChapterTwo: ChapterCreateInput = {
  title: 'test chapter two',
  recurringInterval: 2,
  requirements: 'some requirements of test chapter two'
}

const seedDb = async () => {
  await prisma.user.create({
    data: user,
  });
  await prisma.chapter.createMany({
    data: [ChapterOne, ChapterTwo]
  })
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
