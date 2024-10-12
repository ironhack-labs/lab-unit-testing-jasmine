function add (numOne, numTwo) {
    
    if ((numOne == undefined || numTwo == undefined) || (typeof(numOne) !== "number" || typeof(numTwo) !== "number")) {
        // console.log(typeof(numOne), " - ",typeof(numTwo));
        return undefined;
    }
    
    return numOne + numTwo;
}
