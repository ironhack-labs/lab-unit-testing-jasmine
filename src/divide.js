function divide (num1, num2){

    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return undefined
    }

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      return undefined;
    }

    if (num2 === 0) {
        return 'Cannot divide by 0';
    }
    
    return num1 / num2;
       
}

console.log(divide(2,0));