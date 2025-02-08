function calculateArea(num1,num2) {
    if ( (typeof num1 !== "number") || (typeof num2 !== "number") ) {
        return undefined;
    }

    if (num1 == undefined || num2 == undefined) {
        return undefined;
    }

    return num1*num2;


}
