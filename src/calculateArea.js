function calculateArea(numOne, numTwo) {
    if (numOne==undefined ||numTwo==undefined){
        return undefined;
    } else if (typeof numOne !== 'number' || typeof numTwo !== 'number'){
        return undefined;
    }

    let result = numOne * numTwo;
    return result;

}