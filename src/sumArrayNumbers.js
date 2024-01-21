let sum = 0

function sumArrayNumbers(arr) {
    if(arr.length === 0){
        return 0
    } 
    if (!Array.isArray(arr)){
        return undefined
    }
    if(arr.length > 0) {
        arr.forEach((num) => {
        sum += num})
    } return sum
}