import { prismaMock } from "../../../../../singleton";

import { users } from "./users";

describe("Get Users", () => {
  describe("Happy Path", () => {
    it("should fetch users", async () => {
      const mockedUsers = [
        {
          id: "test-123",
          firstName: "Test",
          lastName: "Tester",
        },
        {
          id: "test-13",
          firstName: "Test 1223",
          lastName: "Tim",
        },
      ];
      prismaMock.user.findMany.mockResolvedValueOnce(mockedUsers);
      await expect(
        users(undefined, undefined, { prisma: prismaMock })
      ).resolves.toStrictEqual(mockedUsers);
    });
  });

  describe("Error handling", () => {
    it("should throw error when fetching users fails", async () => {
      prismaMock.user.findMany.mockRejectedValueOnce(new Error());
      await expect(
        users(
          undefined,
          undefined,
          { prisma: prismaMock }
        )
      ).rejects.toThrow("Failed to fetch users");
    });
  });
});
