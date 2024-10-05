function calculateArea(numb1,numb2) {
    if (typeof(numb1) !== "number" || typeof(numb2) !== "number") {
        return undefined;
    }  
    return numb1 * numb2;
}