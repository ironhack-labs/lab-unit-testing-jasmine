function calculateArea(width, height) {

    if ( width === undefined || height === undefined ){
        return undefined;
    }
    
    if((typeof width !== "number") || (typeof height !== "number")) {
        return undefined;
    }
    return Math.floor(width*height);

}