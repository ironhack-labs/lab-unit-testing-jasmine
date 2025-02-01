function divide (numOne, numTwo) {
    if (typeof numOne !== "number" && numTwo !== "number") {
    }
    if (numOne === undefined  || numTwo === undefined ){
        return undefined;
    }
    return numOne / numTwo;
}