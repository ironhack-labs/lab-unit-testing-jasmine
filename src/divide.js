function calculateArea(num1, num2) {
    if (num1 === undefined || num2 === undefined) return undefined;
    if (typeof num1 !== "number" || typeof num2 !== "number") return NaN;
    if (num1 === 0 || num2 === 0) return 0;

        return num1 * num2;
    }
