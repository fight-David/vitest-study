// user.test.js
import { vi, it, expect, describe } from "vitest";
import { sendWelcomeEmail } from "./stub";
import { getUserEmail } from "./stub.database";

// stub 可以提供间接输入，代替真实逻辑
// mock 在stub 基础上 记录交互信息 ，然后验证
vi.mock("./stub.database.ts", () => {
  return {
    getUserEmail: vi.fn(() => "test@gmail.com"),
  };
});

it("sendWelcomeEmail sends email to the correct address", async () => {
  const email = sendWelcomeEmail(1);
  console.log(getUserEmail)
  expect(email).toBe("test@gmail.com");
});
