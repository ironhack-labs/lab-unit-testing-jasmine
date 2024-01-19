function sumArrayNumbers(arr) {

    if (!Array.isArray(arr)) {
        return undefined
    }

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        
    }
    
    return total;

}