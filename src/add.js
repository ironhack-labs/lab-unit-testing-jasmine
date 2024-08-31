function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined || typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }

    // Refactorizado en una única cláusula de guardia
    // if(typeof numOne !== "number" || typeof numTwo !== "number") {
    //   return undefined;
    // }
    return numOne + numTwo;
}