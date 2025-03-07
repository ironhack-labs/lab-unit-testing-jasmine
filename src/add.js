function add(numOne, numTwo) {
    if (numTwo == !Number || numOne == !Number) {
      return undefined;
    }
    if (numOne == "" && numTwo == "") {
      return undefined;
    }
    if (numOne == undefined || numTwo == undefined) {
      return undefined;
    }
  
    return numOne + numTwo;
  }