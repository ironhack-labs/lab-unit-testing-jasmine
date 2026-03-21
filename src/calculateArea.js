function calculateArea(area1, area2) {
  if (area1 === undefined || area2 === undefined) {
    return undefined;
  }
  if (typeof area1 !== 'number' || typeof area2 !== 'number') {
    return undefined;
  }
  return area1 * area2;
}