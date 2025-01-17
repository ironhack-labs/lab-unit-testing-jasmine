function calculateArea(length , width) {
    if(length === undefined || width === undefined)   {
        return undefined;
    } else if (typeof length !== "number" || typeof width !== "number"){
        return undefined;
    }
    return (Math.round( length * width));
}

