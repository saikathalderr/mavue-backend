import { PrismaClient } from "@prisma/client";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export type UserInput = Pick<User, "firstName" | "lastName">;
export type Args = {
  input: UserInput;
};

export type Validate = (input: UserInput) => Promise<UserInput>;

type Context = {
  prisma: PrismaClient;
};

export type Create = (
  parent: unknown | undefined,
  args: Args,
  context: Context
) => Promise<User>;

export type Users = (
  parent: unknown | undefined,
  args: null | undefined,
  context: Context
) => Promise<User[]>;
