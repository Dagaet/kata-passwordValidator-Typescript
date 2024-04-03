import { describe, it, expect } from "vitest"
import { isPasswordValid } from "./passwordValidator.js"

// Should return true when password meets the conditions
// Should return false when password doesn't meet the conditions

describe("PasswordValidator should", () => {
    it("Return true when password meets the conditions", () => {
      const result = isPasswordValid("Manuel_Alejandro1998")
  
      expect(result).toBe(true)
    })
})