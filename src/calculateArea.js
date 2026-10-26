function calculateArea(length, breadth) {
    if(arguments.length < 2) return undefined;
    if(typeof length !== "number" || typeof breadth !== "number") return undefined;
    return length*breadth;
}