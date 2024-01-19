function sumArrayNumbers(arr) {

    if (!Array.isArray(arr)) {
        return undefined;
    };

    if (arr.length === 0) {
        return 0;
    };

    let sum = 0;

    arr.forEach(function(element) {
        sum += element;
    })
    return sum;
}

console.log(sumArrayNumbers([5, 10, 11]))