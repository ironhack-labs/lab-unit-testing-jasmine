function divide(num1, num2) {
  let division = "";
  if (num1 === undefined || num2 === undefined) {
    return undefined;
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  } else {
    return (division = num1 / num2);
  }
}
console.log(divide(8, 4));
console.log(divide(0, 4));
