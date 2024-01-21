function sumArrayNumbers(arr) {
    if (!Array.isArray(arr)) {
        return undefined;
    }
    else if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    
    arr.forEach(function(element) {
        sum += element;
    })

    return sum;
}

const num = [4, 5, 6, 7]

sumArrayNumbers(num)