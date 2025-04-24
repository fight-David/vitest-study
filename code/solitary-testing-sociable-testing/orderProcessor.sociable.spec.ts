import { test, vi, expect, describe } from "vitest";
import { OrderProcessor } from "./orderProcessor";
import { updateStock } from "./InventoryService";
import { sendEmail } from "./EmailService";

// 群居测试：
// 测试用例关心多个类的行为，关心其他类的行为，关心其他类的依赖关系
vi.mock("./EmailService.ts",() => {
  return {
    sendEmail: vi.fn()
  }
})

// 群居
test("processOrder should succeed when there is enough stock", () => {
  // setup
  updateStock({ name: "hei", count: 1 });

  const orderProcessor = new OrderProcessor();

  orderProcessor.processOrder({ name: "hei", count: 1 });

  expect(sendEmail).toBeCalled()
});
