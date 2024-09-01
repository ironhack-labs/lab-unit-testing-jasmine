function divide (numOne,numTwo) {
    if(numOne === undefined || numTwo === undefined){
        return undefined
    }else if(typeof numOne !== "number" || typeof numTwo !== "number"){
        return undefined
    }else{
        return numOne / numTwo
    }
}
console.log(divide(5))
console.log(divide("2","4"))
console.log(divide())
