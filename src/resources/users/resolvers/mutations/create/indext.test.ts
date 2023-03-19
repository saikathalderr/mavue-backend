import { prismaMock } from "../../../../../../singleton";

import { create } from ".";

describe("Create User", () => {
  describe("Happy Path", () => {
    it("should create user", async () => {
      const mockedUser = {
        id: "test-123",
        firstName: "Test",
        lastName: "Tester",
      };
      prismaMock.user.create.mockResolvedValueOnce(mockedUser);
      await expect(
        create(
          undefined,
          { input: { firstName: "Test", lastName: "Tester" } },
          { prisma: prismaMock }
        )
      ).resolves.toStrictEqual(mockedUser);
    });
  });

  describe("Error handling", () => {
    it("should throw error when invalid input is provided", async () => {
      await expect(
        create(
          undefined,
          { input: { firstName: "Test", lastName: "" } },
          { prisma: prismaMock }
        )
      ).rejects.toThrow("lastName is a required field");
    });
    it("should throw error when creating user fails", async () => {
      prismaMock.user.create.mockRejectedValueOnce(new Error());
      await expect(
        create(
          undefined,
          { input: { firstName: "Test", lastName: "Tester" } },
          { prisma: prismaMock }
        )
      ).rejects.toThrow("Failed to create user");
    });
  });
});
