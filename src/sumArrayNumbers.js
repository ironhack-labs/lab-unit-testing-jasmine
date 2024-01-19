function sumArrayNumbers(arr) {
    if (!arr) {
        return undefined
    }
    if(typeof arr != "array"){
        return undefined;
    }

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
         sum += arr[i];
    }
     return sum;
}
