function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
     if (numOne == NaN || numTwo == NaN){
        return undefined;
    }
    

    return numOne + numTwo;
}