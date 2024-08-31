function calculateArea(numOne, numTwo) {
    if(typeof numOne !== "number" || typeof numTwo !== "number") return undefined;

    if(numOne <= 0 || numTwo <= 0) return undefined;

    return numOne * numTwo;

}