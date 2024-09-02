function calculateArea(width, height) {

  if (width === undefined || height === undefined || typeof width !== 'number' || typeof height !== 'number') {
    return undefined;
  }

  return width * height;
}