function calculateArea(width, height) {
    // Check if any argument is undefined
    if (width === undefined || height === undefined) {
      return undefined;
    }
    
    // Check if both arguments are numbers
    if (typeof width !== 'number' || typeof height !== 'number') {
      return undefined;
    }
    
    // Calculate and return the area (width * height)
    return width * height;
  }