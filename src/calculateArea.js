function calculateArea (length, width ) {
    if (length == undefined || width  == undefined) {
        return undefined;
    }
    if (typeof length !== "number" || typeof width !== "number") {
        return undefined;
    }

    return length * width;
}
