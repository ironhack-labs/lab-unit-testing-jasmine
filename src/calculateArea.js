function calculateArea(part1, part2) {
  if (!part1 || !part2) {
    return undefined;
  } else if (typeof part1 !== "number" || typeof part2 !== "number") {
    return undefined;
  } else {
    return part1 * part2;
  }
}
