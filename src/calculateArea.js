function calculateArea(l, h) {
    if (l == undefined || h == undefined) {
        return undefined;
    }
    if (typeof l != "number" || typeof h != "number") {
        return undefined;
    }

    return l * h;
}