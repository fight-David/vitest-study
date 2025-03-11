import { vi, it, expect, describe } from "vitest";
import { login, loginV2, getTip } from "./login";
import { cxrLogin } from "cxr";

// mock
vi.mock("cxr", () => {
  return {
    // cxrLogin: vi.fn(), // mock 必须要记录和验证
    // cxrLogin: ()=> 2  // stub 只是去提供值，不负责记录和验证
    // cxrLogin: vi.fn().mockReturnValue(true),
    cxrLogin: vi.fn(() => true)
  };
});

describe("login", () => {
  it("should called login function from cxr  ", async () => {
    login("cxr", "jiubugaosuni");

    expect(cxrLogin).toBeCalled();
    // expect(cxrLogin).toBeCalledWith("cxr", "jiubugaosuni");
    // expect(cxrLogin).toBeCalledTimes(1);
  });

  it("v2", () => {
    loginV2("cxr", "jiubugaosuni");

    expect(cxrLogin).toBeCalled();
    expect(getTip()).toBe("登录成功拉");
  });
});
