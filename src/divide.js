function Divide(numOne,numTwo){
const Quotient =0;
if(numOne/numTwo == Number){
    Quotient=numOne%numTwo;
return Quotient;
}
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