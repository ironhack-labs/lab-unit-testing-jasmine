function add (numOne, numTwo) {
    if (typeof numOne === "number" && typeof numTwo === "number") {
        return numOne + numTwo;
    }
    return undefined;
}