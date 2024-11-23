function divide (numOne, numTwo) {
    if(numOne == undefined || numTwo == undefined){
        return undefined;
    } else if(typeof numOne != 'number' || typeof numTwo != 'number'){
        return undefined;
    } else if(numTwo == 0){
        if(numOne == 0){
            return NaN;
        } else{
            return Infinity;
        }
    } else{
        return numOne/numTwo;
    }
}