import { IPasswordValidator } from "./interfaces/IPasswordValidator.js"

export class PasswordValidator implements IPasswordValidator {
  isPasswordValid(password: string) {
    return (
      this.hasValidLength(password, 8) &&
      this.containsALowerCase(password) &&
      this.containsANumber(password) &&
      this.containsAnUpperCase(password) &&
      this.containsAnUnderscore(password)
    )
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

  private containsAnUnderscore(password: string) {
    return password.includes("_")
  }
}

export class PasswordValidator2 implements IPasswordValidator{
  
  isPasswordValid(password: string) {
    return (
      this.hasValidLength(password, 6) &&
      this.containsALowerCase(password) &&
      this.containsANumber(password) &&
      this.containsAnUpperCase(password)
    )
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
export class PasswordValidator3 {
  isPasswordValid(password: string) {
    return (
      this.hasMoreThanSixteenCharacters(password) &&
      this.containsALowercase(password) &&
      this.containsAnUppercase(password) &&
      this.containsAnUnderscore(password)
    )
  }

  private hasMoreThanSixteenCharacters(password: string) {
    return password.length >= 16
  }

  private containsAnUppercase(password: string) {
    const rExp: RegExp = /[A-Z]+/
    return rExp.test(password)
  }

  private containsALowercase(password: string) {
    const rExp: RegExp = /[a-z]+/
    return rExp.test(password)
  }

  private containsAnUnderscore(password: string) {
    return password.includes("_")
  }
}
