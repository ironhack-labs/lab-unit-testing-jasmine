function divide(a, b) {
    // Check if either of the arguments is undefined
    if (a === undefined || b === undefined) {
      return undefined;
    }
  
    // Ensure that both arguments are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
  
    // Return NaN if attempting to divide by zero
    if (b === 0) {
      return NaN;
    }
  
    // Return the division result
    return a / b;
  }
  