function calculateArea(num1, num2) {
  return (typeof num1 === "number" && typeof num2 === "number") ? num1 * num2 : undefined ;
}

console.log(calculateArea(24,6));
