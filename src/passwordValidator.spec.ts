import { describe, it, expect } from "vitest"
import { PasswordValidator } from "./passwordValidator.js"

// Permit a password when meet all the conditions
// Not permit a password when it doesnt have more than eight characters
// Not permit a password when it doesnt have uppercase
// Not permit a password when it doesnt have lowercase
// Not permit a password when it doesnt have a number
// Not permit a password when it doesnt have underscore

describe("PasswordValidator should", () => {
  it("Permit a password when meet all the conditions", () => {
    const passwordValidator = new PasswordValidator()
    const result = passwordValidator.isPasswordValid("Manuel_Alejandro1998")

    expect(result).toBe(true)
  }),
    it("Not permit a password when it doesnt have more than eight characters", () => {
      const passwordValidator = new PasswordValidator()
      const result = passwordValidator.isPasswordValid("aaAA_")

      expect(result).toBe(false)
    }),
    it("Not permit a password when it doesnt have uppercase", () => {
      const passwordValidator = new PasswordValidator()
      const result = passwordValidator.isPasswordValid("manuel_alejandro1998")

      expect(result).toBe(false)
    }),
    it("Not permit a password when it doesnt have lowercase", () => {
      const passwordValidator = new PasswordValidator()
      const result = passwordValidator.isPasswordValid("MANUEL_ALEJANDRO1998")

      expect(result).toBe(false)
    }),
    it("Not permit a password when it doesnt have a number", () => {
      const passwordValidator = new PasswordValidator()
      const result = passwordValidator.isPasswordValid("Manuel_Alejandro")

      expect(result).toBe(false)
    }),
    it("Not permit a password when it doesnt have underscore", () => {
      const passwordValidator = new PasswordValidator()
      const result = passwordValidator.isPasswordValid("ManuelAlejandro1998")

      expect(result).toBe(false)
    })
})
