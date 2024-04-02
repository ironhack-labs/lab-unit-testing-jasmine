function add(numOne, numTwo) {
  if (
    numOne == undefined ||
    numTwo == undefined ||
    typeof numOne === "string" ||
    typeof numTwo === "string"
  ) {
    return undefined;
  }

  return numOne + numTwo;
}

// Take another look at the add function. Is there anything that could be improved? Could you somehow simplify the code to make it easier to read? 🟠
// After you are done refactoring, check the tests one last time to make sure everything is still working fine after refactoring.
