function calculateArea(b, h) {
    if (b == undefined || h == undefined) {
        return undefined;
    } else if (typeof b != "number" || typeof h != "number") {
        return undefined;  
}
return b * h
}