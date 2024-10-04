function calculateArea (arg1, arg2) {
  if (arg2 === 0) {
    return undefined
  }
  if (typeof arg2 !== 'number' || typeof arg1 !== 'number') {
    return undefined
  }
  return arg1 * arg2
}
