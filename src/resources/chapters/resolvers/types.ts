import { PrismaClient } from "@prisma/client";

export type Chapter = {
  id: string;
  text: string;
  title: string;
  requirements: string;
  recurringInterval: number;
  userId: string;
}
export type ChapterInput = Omit<Chapter, "id">;
export type Args = {
  input: ChapterInput;
};

export type Validate = (input: ChapterInput) => Promise<ChapterInput>;

type Context = {
  prisma: PrismaClient;
};

export type Create = (
  parent: unknown | undefined,
  args: Args,
  context: Context
) => Promise<Chapter>;

export type Chapters = (
  parent: unknown | undefined,
  args: null | undefined,
  context: Context
) => Promise<Chapter[]>;
