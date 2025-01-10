function add(numOne, numTwo) {
  if (numOne == undefined || numTwo == undefined) return undefined;
  if (typeof numOne != "number" || typeof numTwo != "number") return undefined;

  return numOne + numTwo;
}

console.log(add(2, "2"));

// console.log(typeof '2' ==='number')
