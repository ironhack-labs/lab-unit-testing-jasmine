function divide(numOne, numTwo) {
    // Check if any argument is undefined
    if (numOne === undefined || numTwo === undefined) {
      return undefined;
    }
    
    // Check if both arguments are numbers
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
      return undefined;
    }
    
    // Check for division by zero
    if (numTwo === 0) {
      return "Cannot divide by zero";
    }
    
    // Return the division of the two numbers
    return numOne / numTwo;
  }