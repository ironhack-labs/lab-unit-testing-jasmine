function calculateArea(width, height) {
    if (typeof width !== "number" || typeof height !== "number") {
        return undefined;
    } else if (width <= 0 || height <= 0) {
        return "Yo, you crazy maaan! That rectangle can't exist! How can that be?? o.O";
    }

    return width * height;
}