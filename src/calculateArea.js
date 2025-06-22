function calculateArea(rectangleL, rectangleW) {
    if( typeof rectangleL !== "number" || typeof rectangleW !== "number") {
        return undefined
    }; 
    
    
    if (rectangleL == undefined || rectangleW == undefined) {
        return undefined
    }
    
    return rectangleL * rectangleW

}