function calculateArea(side, height) {

    console.log(`${side}; ${height}`)

    if ((side === undefined) || 
        (height === undefined)) {
        return undefined
    }

    const area = (side * height).toFixed(3)
    console.log("Area = ", area)

    return area
}