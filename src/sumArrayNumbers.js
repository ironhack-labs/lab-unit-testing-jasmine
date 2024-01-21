function sumArrayNumbers(arrNum) {
    if (!Array.isArray(arrNum)) {
        return undefined;
    }
    let sumAll = 0;
    for (let i = 0; i < arrNum.length; i++) {
        sumAll += arrNum[i];
    }
    return sumAll;
}

sumArrayNumbers([]);