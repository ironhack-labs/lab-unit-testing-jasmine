function calculateArea(a, b) {

  if (
    typeof a !== "number" 
    || typeof b !== "number"
    || typeof a   === "undefined"
    || typeof b === "undefined"
  ) return undefined  

  return a * b

}