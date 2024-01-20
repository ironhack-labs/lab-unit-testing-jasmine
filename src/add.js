function add (numOne, numTwo) {
    if (numOne == NaN || numTwo == NaN) {
        return undefined;
    }
    
    if (typeof numOne != "number" || typeof numTwo != "number") {
        return undefined;
    }


    return numOne + numTwo;
}