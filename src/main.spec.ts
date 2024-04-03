import { describe, it, expect } from "vitest"
import { isPasswordValid } from "./main.js"


// 

describe("Default test", () => {
  it("should work", () => {
    const result = isPasswordValid()

    expect(result).toBe(true)
  })
})
