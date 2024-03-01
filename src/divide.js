function divide(a, b) {
  if (a == undefined || b == undefined || !Number(a) || !Number(b)) {
    return undefined;
  }

  return a / b;
}
