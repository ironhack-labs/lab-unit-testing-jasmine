function add(numOne, numTwo) {
    if ((!numOne || !numTwo)) {
        return undefined;
    }
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }

    return numOne + numTwo;
}