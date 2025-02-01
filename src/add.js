function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
   
    /* if (numOne === 'string' || numTwo ==='string') {
        return undefined;
    }*/ //check with erick

    if (typeof numOne != "number" || typeof numTwo != "number") {
        return undefined;
    }

    return numOne + numTwo;
}

// console.log(add(1,2,3)); extra test.