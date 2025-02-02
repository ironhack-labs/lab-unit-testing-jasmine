function divide(num, div) {
  if (typeof num !== "number" || typeof div !== "number") {
    return undefined;
  } else if (div === 0) {
    return "Can't divide by zero";
  }

  return num / div;
};
