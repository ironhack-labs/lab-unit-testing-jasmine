function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    return numOne + numTwo;
}

function addTwoNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return undefined;
    }
    return a + b;
  }
  
  console.log(addTwoNumbers("3",10));
  console.log(addTwoNumbers(10,null));
  console.log(addTwoNumbers(true ,10));
  console.log(addTwoNumbers({},10));
  console.log(addTwoNumbers(undefined, undefined));