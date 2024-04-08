import { describe, it, expect } from "vitest"
import { PasswordValidator, PasswordValidator2, PasswordValidator3 } from "../passwordValidator.js"

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

// Permit a password when meet all the conditions
// Not permit a password when it doesnt have more than six characters
// Not permit a password when it doesnt have uppercase
// Not permit a password when it doesnt have lowercase
// Not permit a password when it doesnt have a number

describe("PasswordValidator2 should ", () => {
  it("Not permit a password when it doesnt have more than six characters", () => {
    const passwordValidator2 = new PasswordValidator2()
    const result = passwordValidator2.isPasswordValid("M987a")

    expect(result).toBe(false)
  }),
    it("Not permit a password when it doesnt have uppercase", () => {
      const passwordValidator2 = new PasswordValidator2()
      const result = passwordValidator2.isPasswordValid("a987a98e")

      expect(result).toBe(false)
    }),
    it("Not permit a password when it doesnt have lowercase", () => {
      const passwordValidator2 = new PasswordValidator2()
      const result = passwordValidator2.isPasswordValid("A987A98E")

      expect(result).toBe(false)
    }),
    it("Not permit a password when it doesnt have a number", () => {
      const passwordValidator2 = new PasswordValidator2()
      const result = passwordValidator2.isPasswordValid("ABCeABCE")

      expect(result).toBe(false)
    }),
    it("Permit a password when meet all conditions", () => {
      const passwordValidator2 = new PasswordValidator2()
      const result = passwordValidator2.isPasswordValid("ManuelAlejandro1998")

      expect(result).toBe(true)
    })
})
