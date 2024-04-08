export class PasswordValidator {
  isPasswordValid(password: string) {
    return (
      this.hasMoreThanEightCharacters(password) &&
      this.containsALowercase(password) &&
      this.containsANumber(password) &&
      this.containsAnUppercase(password) &&
      this.containsAnUnderscore(password)
    )
  }

  private hasMoreThanEightCharacters(password: string) {
    return password.length >= 8
  }

  private containsAnUppercase(password: string) {
    const rExp: RegExp = /[A-Z]+/
    return rExp.test(password)
  }

  private containsALowercase(password: string) {
    const rExp: RegExp = /[a-z]+/
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

export class PasswordValidator2 {
  isPasswordValid(password: string) {
    return (
      this.hasMoreThanSixCharacters(password) &&
      this.containsALowercase(password) &&
      this.containsANumber(password) &&
      this.containsAnUppercase(password)
    )
  }

  private hasMoreThanSixCharacters(password: string) {
    return password.length >= 6
  }

  private containsAnUppercase(password: string) {
    const rExp: RegExp = /[A-Z]+/
    return rExp.test(password)
  }

  private containsALowercase(password: string) {
    const rExp: RegExp = /[a-z]+/
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
