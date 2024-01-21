function sumArrayNumbers(array) {
    if (!Array.isArray(array)) {
      return undefined;
    }
    if (array.length === 0) {
      return 0;
    }
    return array.reduce((sum, num) => sum + num, 0);
  }