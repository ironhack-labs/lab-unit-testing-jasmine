function divide (numerator, denominator) {
    return (arguments.length === 2 && typeof numerator === "number" && typeof denominator === "number") ? numerator/denominator : undefined;
}

console.log(divide(52,100,3));