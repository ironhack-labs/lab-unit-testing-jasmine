function divide (a, b) {
    let total = a / b
    
    if (typeof a != "number"|| typeof b != "number") {
        return undefined
    }
    
    return total;

}

divide(2,5);
console.log(divide(2,5))


