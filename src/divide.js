function divide(num1, num2) {

  if(num2 == 0) return undefined;
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  }
  return num1 / num2;
}

console.log(divide(0.75, 3));
