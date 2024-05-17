function divide (numOne, numTwo) {
       if(!numOne || !numTwo){
        return undefined
       }

       if(numOne === 0 || numTwo === 0){
        return undefined
       }
       return Number(numOne)/Number(numTwo)
}