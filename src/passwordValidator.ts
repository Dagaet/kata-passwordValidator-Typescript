import { IPasswordValidator } from "./interfaces/IPasswordValidator.js"

export class PasswordValidator implements IPasswordValidator {
  isPasswordValid(password: string) {
    let messageError = "Error, password:"

    this.hasValidLength(password, 8) ? (messageError += "") : (messageError += "\ndoes not have the required length")

    this.containsALowerCase(password) ? (messageError += "") : (messageError += "\ndoes not have lowercase")

    this.containsAnUpperCase(password) ? (messageError += "") : (messageError += "\ndoes not have uppercase")

    this.containsANumber(password) ? (messageError += "") : (messageError += "\ndoes not have a number")

    this.containsAnUnderscore(password) ? (messageError += "") : (messageError += "\ndoes not have an underscore")

    if (messageError !== "Error, password:") {
      throw new Error(messageError)
    }

    return true
  }
  containsALowerCase(password: string): boolean {
    const rExp: RegExp = /[a-z]+/
    return rExp.test(password)
  }
  hasValidLength(password: string, value: number): boolean | Error {
    return password.length >= value
  }
  containsAnUpperCase(password: string): boolean {
    const rExp: RegExp = /[A-Z]+/
    return rExp.test(password)
  }

  private containsANumber(password: string) {
    const rExp: RegExp = /[0-9]+/
    return rExp.test(password)
  }

  private containsAnUnderscore(password: string) {
    return password.includes("_")
  }
}

export class PasswordValidator2 implements IPasswordValidator {
  isPasswordValid(password: string) {
    let messageError = "Error, password:"

    this.hasValidLength(password, 6) ? (messageError += "") : (messageError += "\ndoes not have the required length")

    this.containsALowerCase(password) ? (messageError += "") : (messageError += "\ndoes not have lowercase")

    this.containsANumber(password) ? (messageError += "") : (messageError += "\ndoes not have a number")

    this.containsAnUpperCase(password) ? (messageError += "") : (messageError += "\ndoes not have uppercase")

    if (messageError !== "Error, password:") {
      throw new Error(messageError)
    }

    return true
  }
  containsALowerCase(password: string): boolean {
    const rExp: RegExp = /[a-z]+/
    return rExp.test(password)
  }
  hasValidLength(password: string, value: number): boolean {
    return password.length >= value
  }
  containsAnUpperCase(password: string): boolean {
    const rExp: RegExp = /[A-Z]+/
    return rExp.test(password)
  }
  private containsANumber(password: string) {
    const rExp: RegExp = /[0-9]+/
    return rExp.test(password)
  }
}
export class PasswordValidator3 implements IPasswordValidator {
  isPasswordValid(password: string) {
    let messageError = "Error, password:"

    this.hasValidLength(password, 16) ? (messageError += "") : (messageError += "\ndoes not have the required length")

    this.containsALowerCase(password) ? (messageError += "") : (messageError += "\ndoes not have lowercase")

    this.containsAnUpperCase(password) ? (messageError += "") : (messageError += "\ndoes not have uppercase")

    this.containsAnUnderscore(password) ? (messageError += "") : (messageError += "\ndoes not have an underscore")

    if (messageError !== "Error, password:") {
      throw new Error(messageError)
    }

    return true
  }

  containsALowerCase(password: string): boolean {
    const rExp: RegExp = /[a-z]+/
    return rExp.test(password)
  }

  hasValidLength(password: string, value: number): boolean {
    return password.length >= value
  }

  containsAnUpperCase(password: string): boolean {
    const rExp: RegExp = /[A-Z]+/
    return rExp.test(password)
  }

  private containsAnUnderscore(password: string) {
    return password.includes("_")
  }
}
