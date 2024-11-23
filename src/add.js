function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    } else if(typeof numOne !== 'number' || typeof numTwo !== 'number'){
        // both args defined but at least one is not  a num
        return undefined;
    }

    return numOne + numTwo;
}

