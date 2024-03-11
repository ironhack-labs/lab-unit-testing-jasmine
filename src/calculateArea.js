function calculateArea(width,length) {
    if (width == undefined || typeof width != "number" || length == undefined || typeof length != "number") {
        return undefined;
    }

    else
    return width*length;
}