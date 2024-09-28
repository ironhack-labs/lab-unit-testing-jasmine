function add (numOne, numTwo) {

    if (typeof numOne !== "number" || typeof numTwo !== "number") {
       return undefined;
    }
    
    if (Number.isNaN(numOne) || Number.isNaN(numTwo)) {
        return undefined;
    }   
    
    return numOne + numTwo;
        
}