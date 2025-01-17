function divide (firstNum, secondNum) {
    if(firstNum === undefined || secondNum === undefined)   {
        return undefined;
    } else if (typeof firstNum !== "number" || typeof secondNum !== "number"){
        return undefined;
    }
    return (Math.ceil( firstNum / secondNum));
}