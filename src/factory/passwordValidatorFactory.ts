import { IPasswordValidator } from "../interfaces/IPasswordValidator.js"
import { PasswordValidatorTypes } from "../models/PasswordValidatorTypes.js"
import { PasswordValidator, PasswordValidator2, PasswordValidator3 } from "../passwordValidator.js"

export class PasswordValidatorFactory {
  getPasswordValidator(passwordValidator: PasswordValidatorTypes): IPasswordValidator {
    switch (passwordValidator) {
      case PasswordValidatorTypes.VALIDATOR_ONE:
        return new PasswordValidator()
      case PasswordValidatorTypes.VALIDATOR_TWO:
        return new PasswordValidator2()
      case PasswordValidatorTypes.VALIDATOR_THREE:
        return new PasswordValidator3()
      default:
        throw new Error("Error")
    }
  }
}
