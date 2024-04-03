function hasMoreThanEightCharacters(password:string) {
    return password.length >= 8
}

function containsAnUppercase(password:string) {
    const rExp : RegExp = /[A-Z]+/;
    return rExp.test(password)
}

function containsALowercase(password:string){
    const rExp : RegExp = /[a-z]+/;
    return rExp.test(password)
}

function containsANumber(password:string) {
    const rExp : RegExp = /[0-9]+/;
    return rExp.test(password)
}

function containsAnUnderscore(password:string) {
    return password.includes("_")
}

export const helpers = {
    hasMoreThanEightCharacters,
    containsAnUppercase,
    containsALowercase,
    containsANumber,
    containsAnUnderscore
}