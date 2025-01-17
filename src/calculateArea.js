function calculateArea(side1,side2) {
    if(typeof side1 !== "number" || typeof side2 !== "number") {
        return undefined;
    }
    return side1 * side2;
}