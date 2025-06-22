function divide (numOne, numtwo) {
    if( numOne == undefined || numtwo == undefined) {
        return undefined;
    }

    if(typeof numOne !== "number" || typeof numtwo !== "number") {
        return undefined
    }

    return numOne / numtwo;
       
}