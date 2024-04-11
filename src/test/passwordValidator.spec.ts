import { describe, it, expect } from "vitest"
import { PasswordValidatorFactory } from "../factory/passwordValidatorFactory.js"
import { PasswordValidatorTypes } from "../models/PasswordValidatorTypes.js"

// Permit a password when meet all the conditions
// Not permit a password when it doesnt have more than eight characters
// Not permit a password when it doesnt have uppercase
// Not permit a password when it doesnt have lowercase
// Not permit a password when it doesnt have a number
// Not permit a password when it doesnt have underscore
let factoryPasswordValidator = new PasswordValidatorFactory()

describe("PasswordValidator should", () => {
  it("Permit a password when meet all the conditions", () => {
    const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_ONE)
    const result = passwordValidator.isPasswordValid("Manuel_Alejandro1998")

    expect(result).toBe(true)
  }),
    it("Not permit a password when it doesnt have more than eight characters", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_ONE)
      expect(() => passwordValidator.isPasswordValid("Aaa_1")).toThrowError(
        /^Error, password:\ndoes not have the required length$/,
      )
    }),
    it("Not permit a password when it doesnt have uppercase", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_ONE)
      expect(() => passwordValidator.isPasswordValid("manuel_alejandro1998")).toThrowError(
        /^Error, password:\ndoes not have uppercase$/,
      )
    }),
    it("Not permit a password when it doesnt have lowercase", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_ONE)
      expect(() => passwordValidator.isPasswordValid("MANUEL_ALEJANDRO1998")).toThrowError(
        /^Error, password:\ndoes not have lowercase$/,
      )
    }),
    it("Not permit a password when it doesnt have a number", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_ONE)
      expect(() => passwordValidator.isPasswordValid("Manuel_Alejandro")).toThrowError(
        /^Error, password:\ndoes not have a number$/,
      )
    }),
    it("Not permit a password when it doesnt have underscore", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_ONE)
      expect(() => passwordValidator.isPasswordValid("ManuelAlejandro1998")).toThrowError(
        /^Error, password:\ndoes not have an underscore$/,
      )
    })
})

// Permit a password when meet all the conditions
// Not permit a password when it doesnt have more than six characters
// Not permit a password when it doesnt have uppercase
// Not permit a password when it doesnt have lowercase
// Not permit a password when it doesnt have a number

describe("PasswordValidator2 should ", () => {
  it("Not permit a password when it doesnt have more than six characters", () => {
    const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_TWO)

    expect(() => passwordValidator.isPasswordValid("M987a")).toThrowError(
      /^Error, password:\ndoes not have the required length$/,
    )
  }),
    it("Not permit a password when it doesnt have uppercase", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_TWO)
      expect(() => passwordValidator.isPasswordValid("a987a98e")).toThrowError(
        /^Error, password:\ndoes not have uppercase$/,
      )
    }),
    it("Not permit a password when it doesnt have lowercase", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_TWO)
      expect(() => passwordValidator.isPasswordValid("A987A98E")).toThrowError(
        /^Error, password:\ndoes not have lowercase$/,
      )
    }),
    it("Not permit a password when it doesnt have a number", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_TWO)
      expect(() => passwordValidator.isPasswordValid("ABCeABCE")).toThrowError(
        /^Error, password:\ndoes not have a number$/,
      )
    }),
    it("Permit a password when meet all conditions", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_TWO)
      const result = passwordValidator.isPasswordValid("ManuelAlejandro1998")

      expect(result).toBe(true)
    })
})

describe("PasswordValidator3 should ", () => {
  it("Not permit a password when it doesnt have more than sixteen characters", () => {
    const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_THREE)
    expect(() => passwordValidator.isPasswordValid("Ma_")).toThrowError(
      /^Error, password:\ndoes not have the required length$/,
    )
  }),
    it("Not permit a password when it doesnt have uppercase", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_THREE)
      expect(() => passwordValidator.isPasswordValid("unacontrasenialarga_")).toThrowError(
        /^Error, password:\ndoes not have uppercase$/,
      )
    }),
    it("Not permit a password when it doesnt have lowercase", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_THREE)
      expect(() => passwordValidator.isPasswordValid("UNACONTRASENIALARGA_")).toThrowError(
        /^Error, password:\ndoes not have lowercase$/,
      )
    }),
    it("Not permit a password when it doesnt have underscore", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_THREE)
      expect(() => passwordValidator.isPasswordValid("unacontraseniaLarga")).toThrowError(
        /^Error, password:\ndoes not have an underscore$/,
      )
    }),
    it("Permit a password when meet all conditions", () => {
      const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_THREE)
      const result = passwordValidator.isPasswordValid("unacontraseniaLarga_")

      expect(result).toBe(true)
    })
})

// Password should throw error when given less characters than needed
// Password should throw error when it has no uppercase
// Password should throw error when it has no lowercase
// Password should throw error when it has no underscore
// Password should throw error when it has no number
// Password should throw error when fail various conditions
// Password should throw error when doesn't meet no condition

describe("PasswordValidator should throw error", () => {
  it("When fail various conditions", () => {
    const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_ONE)
    expect(() => passwordValidator.isPasswordValid("manuel_alejandro")).toThrowError(
      /^Error, password:\ndoes not have uppercase\ndoes not have a number$/,
    )
  })

  it("when doesn't meet no condition", () => {
    const passwordValidator = factoryPasswordValidator.getPasswordValidator(PasswordValidatorTypes.VALIDATOR_ONE)
    expect(() => passwordValidator.isPasswordValid("")).toThrowError(
      /^Error, password:\ndoes not have the required length\ndoes not have lowercase\ndoes not have uppercase\ndoes not have a number\ndoes not have an underscore$/,
    )
  })
})
