import { vi, it, expect } from "vitest";
import { doubleInnerWidth, doubleUserAge } from "./global";
// import { innerWidthFn } from "./window";

// 间接层 转换计较
vi.mock('./window.ts', () => {
  return {
    innerWidthFn: () => 180
  }
})

it("doubleUserAge", () => {
  const r = doubleUserAge();

  expect(r).toBe(36);
});

// 全局global
// it("double innerWidth", () => {
//   // window
//   vi.stubGlobal("innerWidth", 200);

//   const r = doubleInnerWidth();

//   expect(r).toBe(400);
// });

// 间接层 转换计较
it("function", () => {
  // window
  const r = doubleInnerWidth();

  expect(r).toBe(360);
});


