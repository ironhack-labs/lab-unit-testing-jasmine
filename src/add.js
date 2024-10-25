function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) return;
    if (numOne == NaN || numTwo == NaN) return;  

    return numOne + numTwo;
}