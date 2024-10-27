function divide (firstNum, secondNum) {

    if (typeof firstNum !== "number" || typeof secondNum !== "number"){
         return undefined;
    }

     if (firstNum == undefined || secondNum == undefined) {
         return undefined;
    }
    

    return firstNum / secondNum;
};