function calculateArea(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return undefined;
    }
    let area = num1 * num2; 
    return area;
}