function divide(num1, num2) {
  if (num1 === undefined || num2 === undefined) {
    return undefined;
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  } else if (num1 < num2) {
    console.error("First argument must be larger than second argument");
    return undefined
  } else {
    return num1 / num2;
  }
}
