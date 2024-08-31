function divide (numOne, numTwo) {
    if (!numOne || !numTwo) {
        return undefined;
    }  
    else if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    } else {
    return (numOne/numTwo);
    }
}