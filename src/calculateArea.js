function calculateArea(numA, numB) {
    if (numA == undefined || numB == undefined) {
        return undefined;
    }
    
    if (typeof numA != "number" || typeof numB != "number") {
        return undefined;
    }

    return numA * numB ;

}