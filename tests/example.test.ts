import { describe, test, expect } from "vitest";
import { myIsEqual } from "../src/example";

describe("test", () => {
  test("case", () => {
    expect(myIsEqual(1, 1)).toBeTruthy();
  });
});
