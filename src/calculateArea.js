function calculateArea(num1, num2) {
    if (num1 == undefined || num2 == undefined) {
        return undefined;
    }
    if (isNaN(num1) || isNaN(num2)) {
        return undefined
    }
    return num1 * num2;
}