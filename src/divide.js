function divide (number, divisor) {
    
    // console.log(`n = ${number}; ${divisor}`)

    if ((number === undefined) || 
        (divisor === undefined) || (divisor === 0.0)) {
        return undefined
    }

    const divNumber = (number/divisor).toFixed(3)

    // console.log("divNumber", divNumber)
    return divNumber
}