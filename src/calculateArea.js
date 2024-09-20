function calculateArea (width, length) {
    return (arguments.length === 2 && typeof width === "number" && typeof length === "number") ? width*length : undefined;
}

console.log(calculateArea(52,100));