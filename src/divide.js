function divide (num01, num02) {
   /* if (num01 == undefined || num02 == undefined) {
        return undefined;
    }  second if cover this case as well */

    // refactoring:
    if (typeof num01 !=  "number" || typeof num02 != "number") {
        
        return undefined;

        }
    
    return Math.ceil(num01 / num02);
       
}