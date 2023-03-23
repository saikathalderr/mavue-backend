import { PrismaClient } from "@prisma/client";
import {User} from "../../users/resolvers/types";

export type Chapter = {
  id: string
  title: string
  text: string | null
  requirements: string
  recurringInterval: number
  assignedTo: User | null
  userId: string | null
};

export type ChapterInput = Pick<Chapter, "title" | "requirements" | "recurringInterval">;

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
) => Promise<ChapterInput>;

export type Chapters = (
  parent: unknown | undefined,
  args: null | undefined,
  context: Context
) => Promise<Chapter[]>;
