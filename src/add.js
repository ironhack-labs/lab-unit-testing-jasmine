function add(numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined
    }


    return numOne + numTwo;
}

console.log(add(1, 3))
console.log(add(1, '3'))
console.log(add('1', 3))
console.log(add('1', '3'))
console.log(add('1', null))
console.log(add('1', undefined))