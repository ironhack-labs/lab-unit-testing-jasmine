function divide (a, b) {
    if (typeOf a !== "number" || typeOf b !== "number"){
        return undefined;
    }
    return a / b;
       
}

console.log(divide(7, 5));