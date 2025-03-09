import { afterEach, it, expect, vi, describe } from "vitest";
import { doubleUserAge } from "./env";

afterEach(() => {
  vi.unstubAllEnvs();
});

it("process", () => {
  // stub 可以提供间接输入，代替真实逻辑
  // mock 在stub 基础上 记录交互信息 ，然后验证
  vi.stubEnv("USER_AGE", "99");
  //   import.meta.env  vite webpack
  //   process.env.USER_AGE = "15";
  const r = doubleUserAge();

  console.log(r);

  // vi.unstubAllEnvs();
});

it("second", () => {
  const r = doubleUserAge();

  console.log(r);
});
