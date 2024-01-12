function printFullName(nameObj) {
  
  if (
    typeof nameObj !== "object"
    || nameObj === undefined
    || typeof nameObj.first !== "string"
    || typeof nameObj.last !== "string"
   ) return undefined;

return nameObj.first + " " + nameObj.last
    
}