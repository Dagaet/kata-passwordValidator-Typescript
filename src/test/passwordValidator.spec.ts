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
      expect(() => passwordValidator.isPasswordValid("Aaa_1")).toThrowError(/^Error, password:\ndoes not have the required length$/)
    }),
    it("Not permit a password when it doesnt have uppercase", () => {
      const passwordValidator = new PasswordValidator()
      expect(() => passwordValidator.isPasswordValid("manuel_alejandro1998")).toThrowError(/^Error, password:\ndoes not have uppercase$/)
    }),
    it("Not permit a password when it doesnt have lowercase", () => {
      const passwordValidator = new PasswordValidator()
      expect(() => passwordValidator.isPasswordValid("MANUEL_ALEJANDRO1998")).toThrowError(/^Error, password:\ndoes not have lowercase$/)
    }),
    it("Not permit a password when it doesnt have a number", () => {
      const passwordValidator = new PasswordValidator()
      expect(() => passwordValidator.isPasswordValid("Manuel_Alejandro")).toThrowError(/^Error, password:\ndoes not have a number$/)
    }),
    it("Not permit a password when it doesnt have underscore", () => {
      const passwordValidator = new PasswordValidator()
      expect(() => passwordValidator.isPasswordValid("ManuelAlejandro1998")).toThrowError(/^Error, password:\ndoes not have an underscore$/)
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

describe("PasswordValidator3 should ", () => {
  it("Not permit a password when it doesnt have more than sixteen characters", () => {
    const passwordValidator3 = new PasswordValidator3()
    const result = passwordValidator3.isPasswordValid("Ma_")

    expect(result).toBe(false)
  }),
    it("Not permit a password when it doesnt have uppercase", () => {
      const passwordValidator3 = new PasswordValidator3()
      const result = passwordValidator3.isPasswordValid("unacontrasenialarga_")

      expect(result).toBe(false)
    }),
    it("Not permit a password when it doesnt have lowercase", () => {
      const passwordValidator3 = new PasswordValidator3()
      const result = passwordValidator3.isPasswordValid("UNACONTRASENIALARGA_")

      expect(result).toBe(false)
    }),
    it("Not permit a password when it doesnt have underscore", () => {
      const passwordValidator3 = new PasswordValidator3()
      const result = passwordValidator3.isPasswordValid("unacontraseniaLarga")

      expect(result).toBe(false)
    }),
    it("Permit a password when meet all conditions", () => {
      const passwordValidator3 = new PasswordValidator3()
      const result = passwordValidator3.isPasswordValid("unacontraseniaLarga_")

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
  it("When given less characters than needed", () => {
    const passwordValidator = new PasswordValidator()
    expect(() => passwordValidator.isPasswordValid("Aaa_1")).toThrowError(/^Error, password:\ndoes not have the required length$/)
  })

  it("When it has no uppercase", () => {
    const passwordValidator = new PasswordValidator()
    expect(() => passwordValidator.isPasswordValid("manuel_alejandro1998")).toThrowError(/^Error, password:\ndoes not have uppercase$/)
  })

  it("When fail various conditions", ()=> {
    const passwordValidator = new PasswordValidator()
    expect(() => passwordValidator.isPasswordValid("manuel_alejandro")).toThrowError(/^Error, password:\ndoes not have uppercase\ndoes not have a number$/)
  })

  it("when doesn't meet no condition", () => {
    const passwordValidator = new PasswordValidator()
    expect(() => passwordValidator.isPasswordValid("")).toThrowError(/^Error, password:\ndoes not have the required length\ndoes not have lowercase\ndoes not have uppercase\ndoes not have a number\ndoes not have an underscore$/)
  })
})
