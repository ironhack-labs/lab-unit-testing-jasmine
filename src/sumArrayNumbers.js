function sumArrayNumbers(array) {
    if (array === undefined || !Array.isArray(array)) {
        return undefined;
    } else if (array.length === 0) {
        return 0
    }
    
    let isOnlyNumber = true

    array.forEach(function(element) {
        if (typeof element !== "number") {
            isOnlyNumber = false;
        }
    })

    if (!isOnlyNumber) {
        return undefined
    }

    let sum = 0;

    array.forEach(function(element) {
        sum += element;
    })
    
    return sum;
}