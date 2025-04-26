function calculateArea(a, b) {
    if( typeof a !== "number" || typeof b !== "number"){
        return undefined;
    }
    const area = a * b;
    return area; 

}