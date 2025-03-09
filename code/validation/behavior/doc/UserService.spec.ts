import { vi, it, expect, describe } from "vitest";
import { UserService } from "./UserService";
import { Database } from "./database";

// 行为验证 如：这里判断 addUser 是否被调用
// stub 可以提供间接输入，代替真实逻辑
// mock 测试替身： 记录交互信息，提供数据验证
describe("UserService", () => {
  it("should create user ", () => {

    const database = new Database();
    // 注入mock
    // Database.prototype.addUser = vi.fn()
    vi.spyOn(database, 'addUser') // 都是基于方法，属性不行

    const userService = new UserService(database);

    userService.createUser("cxr");
    // 状态很难获取到  那么你就只能使用行为验证了
    expect(database.addUser).toBeCalled()
  });
});