const testArray = [2,4,6,3]

function sumArrayNumbers(array) {
    if (!(Array.isArray(array))) {
        return undefined
    }
    
    const sum = array.reduce((acc,value)=>
        acc + value,0
    )

    return sum
}