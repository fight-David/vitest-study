import { vi, it, expect } from "vitest";
import { doubleInnerWidth, doubleUserAge } from "./global";
import { innerWidthFn } from "./window";

vi.mock('./window.ts', () => {
  return {
    innerWidthFn: () => 180
  }
})

it("doubleUserAge", () => {
  const r = doubleUserAge();

  expect(r).toBe(36);
});

// it("double innerWidth", () => {
//   // window
//   vi.stubGlobal("innerWidth", 200);

//   const r = doubleInnerWidth();

//   expect(r).toBe(400);
// });

it("function", () => {
  // window
  const r = doubleInnerWidth();

  expect(r).toBe(360);
});


