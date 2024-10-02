function divide (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return undefined;
    } else if (num2 === 0) {
        return "can't divide by 0"
    }

    return num1 / num2;
}
