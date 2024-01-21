function divide (numOne, numTwo) {
    if (!numOne || !numTwo) {
        return undefined;
    }
    if (typeof numOne != 'number' || typeof numTwo != 'number') {
        return "Please enter two numbers.";
    }

    /* Original Code
    return numOne / numTwo; */

    // Refactor
    const result = Math.floor(numOne/numTwo);
    const resultDecimal = numOne / numTwo;
    const remainder = numOne % numTwo;
    if (remainder === 0) {
        return `${numOne} divided by ${numTwo} is ${result}.`;
    }
    return `${numOne} divided by ${numTwo} is ${result} remainder ${remainder}, or ${resultDecimal}.`

}


console.log(divide(81, 10))