import { describe, it, expect } from "vitest"
import { PasswordValidator, } from "./passwordValidator.js"

// Should return true when password meets the conditions
// Should return false when password doesn't meet the conditions

describe("PasswordValidator should", () => {
    it("Permit a password when meet all the conditions", () => {
      const passwordValidator = new PasswordValidator()
      const result = passwordValidator.isPasswordValid("Manuel_Alejandro1998")
  
      expect(result).toBe(true)
    })
})