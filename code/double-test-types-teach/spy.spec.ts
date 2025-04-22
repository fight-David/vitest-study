import { vi, test, expect, describe } from "vitest";
import { user } from "./spy";

test("spy", () => {
  // spyOn 可以记录交互信息 ，然后验证
  vi.spyOn(user, "getName").mockImplementation(() => "heiheihei");
  user.getName();

  expect(user.getName).toBeCalled();
  expect(user.getName()).toBe("heiheihei");
  console.log(user.getName);
});
