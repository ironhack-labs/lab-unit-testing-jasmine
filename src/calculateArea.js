function calculateArea(base, height) {
    if (typeof base === "string"  || typeof height === "string" || base == undefined || height == undefined) {
        return undefined;
    }

    return base * height;
}