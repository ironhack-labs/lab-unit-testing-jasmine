function calculateArea(num1, num2) {
    // if (typeof num1 !== "number" || typeof num2 !== "number") {
    if (arguments.length < 2) {
        return undefined;
    }
    return num1 * num2;
}
