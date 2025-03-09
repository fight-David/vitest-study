import { it, expect, describe, vi } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";


// 状态验证
describe("UserService", () => {
  it("should create user ", () => {
    const database = new Database();
    const userService = new UserService(database);

    const user = userService.createUser("cxr");

    // expect(database.getUser(user.id)?.name).toBe("cxr");
    expect(userService.findUser(user.id)?.name).toBe("cxr");
  });
});
