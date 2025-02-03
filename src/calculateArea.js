function calculateArea (c, d) {
    if (c === undefined || d === undefined) {
        return undefined;
    }

    if (typeof c !== "number" || typeof d !== "number"){
        return undefined;
    }

    return c * d;
}