function divide (numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number' || numTwo===0) {
        return undefined;
    }

    return numOne / numTwo;
       
}