function sumArrayNumbers(array) {
    let result = 0
    if (!Array.isArray(array)) {
        return undefined
    }
    array.forEach((number)=>{
        result += number
    })
    return result
}

