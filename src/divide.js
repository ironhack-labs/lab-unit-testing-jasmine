function Divide (numOne,numTwo) {
    if (numOne == undefined || numTwo == undefined) { 
        return undefined;
    }
    if (numOne == 0) { 
        return '';
    }
    if (numOne == 0 && numTwo !== 0) { 
        return 0;
    }
    if (numTwo == 0) { 
        return undefined;
    }
    return numOne / numTwo;    
}



