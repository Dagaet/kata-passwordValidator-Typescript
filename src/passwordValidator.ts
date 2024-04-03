import { helpers } from "./helpers.js";

export function isPasswordValid(password:string) {
  return helpers.hasMoreThanEightCharacters(password) && helpers.containsALowercase(password) && 
  helpers.containsANumber(password) && helpers.containsAnUppercase(password) &&
  helpers.containsAnUnderscore(password)
}

