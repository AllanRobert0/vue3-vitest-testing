import { test } from "vitest";

test("should return a the number one", () => {
  expect(1).toBe(1);
  expect(1).toBeGreaterThanOrEqual(1);
});
