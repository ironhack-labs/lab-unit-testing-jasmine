function divide (number1, number2) {
       if (number1 == undefined || number2 == undefined) {
        return undefined;
       }
       if (Number.isFinite(number1) == false || Number.isFinite(number2) == false ) {
       return undefined;
       } else return number1 / number2;
}