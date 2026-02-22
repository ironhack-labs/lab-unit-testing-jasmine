function divide (numOne, numTwo) {

    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }

    return numOne / numTwo;
       
}

console.log(divide(1,2)) 