function divide (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") return undefined;
    if (num2 === 0) return NaN;
    
    return Math.ceil(num1 / num2);
}