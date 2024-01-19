function sumArrayNumbers(arr) {

    let sum = 0;

    if (arr === undefined) {return undefined};
    if (arr.length === 0) {return sum};
    if (!Array.isArray(arr)) {return undefined};
    if (arr.some(isNaN)) {return undefined};
    
    arr.forEach(num => sum += num);

    return sum;

}