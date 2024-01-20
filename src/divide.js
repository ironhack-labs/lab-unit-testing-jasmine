function divide (numOne, numTwo) {
    let div = numOne / numTwo
   if(typeof(numOne) !== "number" || typeof(numTwo)!== "number" ){
    return undefined
   }
   return div
}