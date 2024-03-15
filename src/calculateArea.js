function calculateArea(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number') {
        return undefined;
      } else {
        return length * width
    }
}