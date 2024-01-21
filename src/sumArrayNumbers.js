function sumArrayNumbers(numArray) {
    if (!Array.isArray(numArray)) {
        return undefined;
    }

    let arraySum = 0;
    
for (let i = 0; i < numArray.length; i++) {
    arraySum += numArray[i];
}

    return arraySum;
}

console.log(sumArrayNumbers([1, 2, 3]))
