import { doubleUserAge, fetchDoubleUserAge } from "./index";
import { beforeEach, vi, it, expect, describe } from "vitest";
import { userAge, fetchUserAge } from "./user";

// console.log(userAge());

// stub   存根
// 替换掉真实的逻辑实现
// 编译时会提高顶部
vi.mock("./user", () => {
  return {
    // userAge: () => 2,
    fetchUserAge: () => Promise.resolve(2),
  };
});

// vi.mock("./user");

// 我们是否可以控制 间接input 的值呢 ( user userAge)
describe("间接input", () => {
  beforeEach(() => {
    // vi.doMock("./user", () => {
    //   return {
    //     userAge: () => 2,
    //   };
    // });
  });
  it("first", async () => {
    // given
    // vi.mocked(userAge).mockReturnValue(2);
    // domock 这里需要二次导入
    // const { doubleUserAge } = await import("./index");

    // const r = doubleUserAge()
    // expect(r).toBe(4)

    const r = await fetchDoubleUserAge();
    expect(r).toBe(4);
  });

  it("second", () => {
    //     vi.mocked(userAge).mockReturnValue(4);

    //     console.log(userAge());
  });
});
