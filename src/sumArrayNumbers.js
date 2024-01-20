function sumArrayNumbers(arr) {
    if (!Array.isArray(arr)) {
        return undefined
    }
    if (arr.length === 0) {
        return 0
    }

    let sum = 0;

    arr.forEach((number) => {
        sum += number
    })

    return sum
}