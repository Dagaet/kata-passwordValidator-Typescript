import { IPasswordValidator } from "../interfaces/IPasswordValidator.js";
import { PasswordValidator, PasswordValidator2, PasswordValidator3 } from "../passwordValidator.js";

export class PasswordValidatorFactory {
    getPasswordValidator(passwordValidator: String): IPasswordValidator{
        switch (passwordValidator) {
            case "1":
                return new PasswordValidator();
            case "2":
                return new PasswordValidator2();
            case "3":
                return new PasswordValidator3();
            default:
                throw new Error("Error")
        }
    }
}