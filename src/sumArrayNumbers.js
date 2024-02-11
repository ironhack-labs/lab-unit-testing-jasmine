function sumArrayNumbers(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (!arr.length) return 0;

  return arr.reduce((accum, currentEl) => {
    return accum + currentEl;
  });
}

console.log(sumArrayNumbers([]));
