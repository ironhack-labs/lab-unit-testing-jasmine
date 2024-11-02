function calculateArea(a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return undefined;
    }
   /* if(a === undefined || b === undefined){
        return undefined;
    }*/
    return a * b;
}