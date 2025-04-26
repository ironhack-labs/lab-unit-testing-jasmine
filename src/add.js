function add (numOne, numTwo) {
    if (typeof numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (typeof numOne !== 
        "number" || typeof numTwo !== "number") {
        return undefined;
    }

    return numOne + numTwo;
}