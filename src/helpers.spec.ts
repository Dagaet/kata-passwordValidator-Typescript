import { describe, it, expect } from "vitest"
import { isPasswordValid } from "./main.js"
import { helpers } from "./helpers.js"

// Should return true when it has 8 characters
// Should return true when it contains a upperCase
// Should return true when it contains a lowerCase
// Should return true when it contains a number
// Should return true when it contains an underscore

describe("Helpers should", () => {
  it("Return true when it has 8 characters", () => {
    const result = helpers.hasEightCharacters("Jijijaja")

    expect(result).toBe(true)
  })
})
