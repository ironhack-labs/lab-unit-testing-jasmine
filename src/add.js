function add (numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number' || isNaN(numOne) || isNaN(numTwo)) {
        return undefined;
    }  

    return numOne + numTwo;
}

add(undefined, 35);