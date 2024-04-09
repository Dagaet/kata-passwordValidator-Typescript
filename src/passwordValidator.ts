import { IPasswordValidator } from "./interfaces/IPasswordValidator.js"

export class PasswordValidator implements IPasswordValidator {
  isPasswordValid(password: string) {
    let messageError = "Error, password:";

    if(!this.hasValidLength(password, 8)){
      messageError += "\ndoes not have the required length"
    }

    if(!this.containsALowerCase(password)){
      messageError += "\ndoes not have lowercase"
    }

    if(!this.containsAnUpperCase(password)){
      messageError += "\ndoes not have uppercase"
    }


    if(!this.containsANumber(password)){
      messageError += "\ndoes not have a number"
    }


    if(!this.containsAnUnderscore(password)){
      messageError += "\ndoes not have an underscore"
    }

    if (messageError !== "Error, password:"){
      throw new Error(messageError);
      
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
export class PasswordValidator3 implements IPasswordValidator {

  isPasswordValid(password: string) {
    return (
      this.hasValidLength(password, 16) &&
      this.containsALowerCase(password) &&
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

  private containsAnUnderscore(password: string) {
    return password.includes("_")
  }
}
