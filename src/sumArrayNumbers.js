function sumArrayNumbers(array) {
    if (array.length === 0) {
        return 0;
    }
    else if (!(Array.isArray(array))) {
        return undefined
    }
    else {
        let sumofArray = 0;
        for (let i = 0; i < array.length; i++) {
            sumofArray += array[i];
        }
        return sumofArray;
    }
}
let array = [1, 2, 3];
console.log(sumArrayNumbers(array));