function divide (num1, num2) {
    if(num1 === undefined || num2 === undefined) {
        return undefined;
    } else if(typeof num1 !== "number" || typeof num2 !== "number") {
        return NaN ;
    }

    return num1 / num2;
}