function sumArrayNumbers(arrayOfNumbers) {
    if(!Array.isArray(arrayOfNumbers)){
        return undefined;
    }

    let sum = 0;
    for(let i=0; i<arrayOfNumbers.length; i++){
        sum += arrayOfNumbers[i];
    }

    return sum
}

console.log(sumArrayNumbers([]))