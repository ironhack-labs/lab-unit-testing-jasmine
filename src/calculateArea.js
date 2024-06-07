function calculateArea(width, height) {
    if (width === undefined || height === undefined) {
        return undefined;
    }
    if (width === 0 || height === 0) {
        return 0;
    }
    return width * height;
}