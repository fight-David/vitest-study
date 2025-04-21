import { vi, it, expect, describe } from "vitest";
import { sayHi } from "./setInterval";

describe("setInterval", () => {
  it('should call one', () => {
    vi.useFakeTimers()
    vi.spyOn(console, 'log')
    sayHi()

    // vi.advanceTimersToNextTimer()
    // vi.advanceTimersToNextTimer() // 上一个快进
    
    vi.advanceTimersByTime(1100) // 把时间快进

    expect(console.log).toBeCalledWith('hi')
  })
});
