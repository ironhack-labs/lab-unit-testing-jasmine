const calculateArea = (numOne, numTwo) =>
  numOne == undefined ||
  numTwo == undefined ||
  typeof numOne !== "number" ||
  typeof numTwo !== "number"
    ? undefined
    : numOne * numTwo;
