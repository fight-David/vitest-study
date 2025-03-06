import { it, expect, describe, vi } from "vitest";
import { tellName, tellSex } from "./use-variable";
import { name, gold } from "./config";


vi.mock('./config.ts', async (importOriginal) => {
  const config = await importOriginal()
  return { ...config as any, name: 'dw' }
})

describe("使用变量的形式", () => {
  it("tell name ", () => {
    console.log(gold);
    // when
    const name = tellName();

    // then
    expect(name).toBe("dw-heiheihei");
  });

  it('tell sex', () => {
    const sex = tellSex()

    expect(sex).toBe('dw-male')
  })

});


