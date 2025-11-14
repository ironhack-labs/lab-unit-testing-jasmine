function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return undefined;
    }

    return numOne + numTwo;
}

    console.log(add());

function division (numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return undefined;
    }
    if (numTwo === 0) {
        return undefined; 
    }
    return numOne / numTwo;
}
console.log(division(9, 2));