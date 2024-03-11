function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    else if ( typeof numOne === "string" || typeof numTwo === "string"){
        return undefined
    }

    return numOne + numTwo;
}