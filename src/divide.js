function divide(a, b) {
  if (arguments.length < 2 || !Number.isFinite(a) || !Number.isFinite(b)) {
    return undefined;
  }
  return a / b;
}