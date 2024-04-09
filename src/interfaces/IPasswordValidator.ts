export interface IPasswordValidator {
    isPasswordValid(password:string): boolean
    containsALowerCase(password:string): boolean
    hasValidLength(password:string, value:number): boolean | Error
    containsAnUpperCase(password:string):boolean
}