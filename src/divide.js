function divide (dividend, divisor) {
    if(arguments.length < 2) return undefined;
    if(typeof dividend !== "number" || typeof divisor !== "number") return undefined;
    if(divisor === 0 ) return undefined;
    return dividend/divisor;
}