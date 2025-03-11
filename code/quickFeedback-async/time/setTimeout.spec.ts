import { vi, it, expect, describe } from "vitest";
import { User } from "./setTimeout";

describe("setTimeout", () => {
  it("should fetch User data", () => {
    vi.useFakeTimers() // 替换真实的settimeout

    const user = new User('1')

    // 这里没有改变状态，所以用行为验证里面的settimeout是否执行 mock
    const callback = vi.fn()
    user.fetchDataV2(callback)
    // vi.advanceTimersByTime(100)
    // vi.advanceTimersToNextTimer()

    const userA = new User('2')
    const callbackA = vi.fn()
    userA.fetchDataV2(callbackA)

    vi.runAllTimers()

    expect(callback).toBeCalledWith('Data for user with id: 1')
    expect(callbackA).toBeCalledWith('Data for user with id: 2')
  });
});
