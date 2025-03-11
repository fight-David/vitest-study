import { beforeEach, afterEach, vi, it, expect, describe } from "vitest";
import { checkFriday } from "./date";

describe("date", () => {

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should be happy when it's Friday", () => {
    // 月份用 0 开始
    vi.setSystemTime(new Date(2025, 2, 7))

    const result = checkFriday()

    expect(result).toBe("happy");
  });

  it("should be happy when it's Friday", () => {
    // 月份用 0 开始
    vi.setSystemTime(new Date(2025, 2, 8))

    const result = checkFriday()

    expect(result).toBe("sad");
  });

  it('third', () => {
    checkFriday()
  })

});
