function divide(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return undefined;
      }
  if (num1.length === 0 || num2.length === 0) {
    return undefined;
  }
 
  return num1 / num2;
}
