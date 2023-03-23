import { PrismaClient } from "@prisma/client";
import { User } from "../../users/resolvers/types";

export type Chapter = {
  id: string;
  title: string;
  text: string | null | undefined;
  requirements: string;
  recurringInterval: number;
  assignedTo: User | null | undefined;
  userId: string | null | undefined;
};

export type ChapterCreateInput = Pick<
  Chapter,
  "title" | "requirements" | "recurringInterval"
>;
export type ChapterUpdateInput = Pick<Chapter, "text" | "userId">;

export type Args = {
  input: ChapterCreateInput;
};

export type UpdateArgs = {
  input: ChapterUpdateInput
  id: string
};

export type ChapterByIdArgs = {
  id: string
}

export type Validate = (
  input: ChapterCreateInput
) => Promise<ChapterCreateInput>;

export type ValidateChapterUpdate = (
  input: ChapterUpdateInput
) => Promise<ChapterUpdateInput>;


type Context = {
  prisma: PrismaClient;
};

export type Chapters = (
  parent: unknown | undefined,
  args: null | undefined,
  context: Context
) => Promise<Chapter[]>;

export type ChapterById = (
  parent: unknown | undefined,
  args: ChapterByIdArgs,
  context: Context
) => Promise<Chapter | undefined | null>;


export type Create = (
  parent: unknown | undefined,
  args: Args,
  context: Context
) => Promise<ChapterCreateInput>;

export type Update = (
  parent: unknown | undefined,
  args: UpdateArgs,
  context: Context
) => Promise<ChapterUpdateInput>;
