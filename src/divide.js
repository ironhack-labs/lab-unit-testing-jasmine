function divide(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return undefined;
  }
  return arg1 / arg2;
}
divide(1, 2);
divide(3, 4);
divide(100, 50);
