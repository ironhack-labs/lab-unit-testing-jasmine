function sumArrayNumbers(arrayType) {
    if (!Array.isArray(arrayType)) {
        return undefined;
    }

    let sum = 0;
    for (let i = 0; i < arrayType.length; i++) {
        sum += arrayType[i];
    }
    return sum;

}