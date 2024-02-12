function calculateArea(width, length) {

    if(typeof width != 'number' || typeof length != 'number'){
        return undefined;
    } else {
        return width * length; 
    }

}