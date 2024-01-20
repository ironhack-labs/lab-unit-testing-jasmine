function printFullName(arg) {
  if (typeof arg !== "object") {
    return undefined;
  }
  if (typeof arg.firstName !== "string" || typeof arg.lastName !== "string") {
    return undefined;
  }
  return arg.firstName + " " + arg.lastName;
}
