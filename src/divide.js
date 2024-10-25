function divide (num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || Number.isNaN(num1) || Number.isNaN(num2)) return undefined;
    return num1 / num2;       
}