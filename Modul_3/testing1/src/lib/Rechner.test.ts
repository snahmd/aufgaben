import { getRechner } from "./Rechner";
import { test, expect } from "vitest";

test("getRechner", () => {
  expect(getRechner(0.1, 100, 2)).toBeTypeOf("object");
  expect(getRechner(0.1, 100, 2)).toEqual([10, 110, 55]);
});
