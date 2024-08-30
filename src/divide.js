function divide(numOne, numTwo) {
  if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
      return undefined;
  }
  if (numTwo === 0) {
      return undefined; // Opcional: Manejo de la división por cero
  }
  return numOne / numTwo;
}