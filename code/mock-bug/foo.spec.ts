import { describe, expect, it, vi } from "vitest";
import { bar } from "./bar";


vi.mock("./foo.ts", async (importOriginal) => {
    const original: any = await importOriginal()

    return {
        ...original,
        foo() {
            return 'cxr'
        }
    }
})


it('bar', () => {
    expect(bar()).toBe('cxrbar')
})