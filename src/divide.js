function divide (numThree, numFour) {

    // checking inf one or both arguments are not provided
    if (numThree === undefined || numFour === undefined) {
        return undefined;
    }

    // checking if one or both arguments are not a number
    if (typeof numThree !== 'number' || typeof numFour !== 'number') {
    return undefined;
}
    return numThree / numFour;
}     