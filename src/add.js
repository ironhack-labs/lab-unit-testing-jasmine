function add (numOne, numTwo) {
    if(typeof numOne !== "number" ||
        typeof numTwo !== "number" || 
        numOne == undefined || 
        numTwo == undefined)
    {
        return undefined;
    } 

    return numOne + numTwo;
}