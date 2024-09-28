function divide (numOne, numTwo) {
    if ((numOne === undefined ||numTwo === undefined ) 
        ||(typeof numOne != "number" ||typeof numTwo != "number" )){
        return undefined;
}
 if (numTwo === 0) {
    throw new Error("Division by 0 is not allowed!");
}
return numOne/numTwo;
 }