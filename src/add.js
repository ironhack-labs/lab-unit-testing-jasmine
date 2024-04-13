function add(numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    // if (!numOne || !numTwo) 
    //     return undefined;

    if (typeof numOne === "number" && typeof numTwo === "number") {
        return numOne + numTwo;
    }

}

//return numOne + numTwo;
