function calculateArea(numOne, numTwo) {
    if ((numOne == undefined || numTwo == undefined) ||
    (typeof numOne != "number" || typeof numTwo != "number") ||
    (numOne <= 0 || numTwo <= 0)) {
        return undefined;
    }

    return(numOne * numTwo);
}

console.log(calculateArea(-3, 2))