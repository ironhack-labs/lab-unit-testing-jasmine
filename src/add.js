function add (num1, num2) {
    if (num1 == undefined || num2 == undefined) {
        return undefined;
    }
    if (typeof num1 != "number" || typeof num2 != "number" ) {
        return undefined;
    }
    let sum = num1 + num2;
    return sum;
}