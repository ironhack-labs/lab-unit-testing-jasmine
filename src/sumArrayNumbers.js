function sumArrayNumbers(array) {

    if (Array.isArray(array)) { return undefined}
    let sum = 0
    array.forEach(element => {
        sum += element    
    });
    console.log(sum)
    return sum
}

let array = [1, 2, 3]
sumArrayNumbers(array)