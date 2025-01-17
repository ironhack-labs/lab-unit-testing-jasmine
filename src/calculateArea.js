function calculateArea(base, height) {
    if (typeof base !== "number" || typeof height !== "number") {
        return undefined;
    }
    
    return base * height;
}
