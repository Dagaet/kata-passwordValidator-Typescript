interface IPasswordValidator {
    isPasswordValid(password:string): boolean
    containsALowerCase(password:string): boolean
    hasValidLength(password:string, value:number): boolean
    containsAnUpperCase(password:string):boolean
}