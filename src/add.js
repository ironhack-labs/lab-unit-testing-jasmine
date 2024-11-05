function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (typeof numOne === 'String' || typeof numTwo === 'string'){
        return undefined;
    } 
    
    return numOne + numTwo;
}