function divide (n1, n2) {
    if(n1 == undefined || n2 == undefined){
        return undefined;
    }else if(n1 && n2 == undefined){
        return undefined;
    }else if(n1 && n2 == NaN){
        return undefined;
    }

    let result = n1 / n2;
    return result;
}
