function calculateArea(oneNum, twoNum) {
    if (typeof oneNum !== "number" || typeof twoNum !== "number") {
        return undefined
    }
    return oneNum * twoNum;
}
