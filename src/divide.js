function divide (first1, second2) {
    if (typeof first1 !== "number" || typeof second2 !== "number" ) {
        return undefined;        
    }
       return first1/second2;
}

console.log(divide(50,2));