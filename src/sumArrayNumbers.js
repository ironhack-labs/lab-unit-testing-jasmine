function sumArrayNumbers(numArray) {
    if(!(numArray instanceof Array)) {
        return undefined;
    }
    
    let sum = 0;

    numArray.forEach(number => {
        sum += number;
    });

    return sum;

}

