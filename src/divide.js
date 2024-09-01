function divide(a, b) {

    if (a === 0 || b === 0) {
    return undefined;
  } 
  else if (typeof a !== "number" || typeof b !== "number") {
    return undefined;
  } 
  else {
    return a / b;
  }
}
