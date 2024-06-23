function add(numOne, numTwo) {
  if (numOne == undefined || numTwo == undefined) {
    return undefined;
  }

  return numOne + numTwo;
}

add(1, 2);
add(3, 4);
add(100, 47);
add(1);
add();
add(undefined, 1);
