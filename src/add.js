function add(numOne, numTwo) {
    if (numOne === undefined || numTwo === undefined) {
        return undefined; // Check if arguments are missing.
    }

    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return undefined; // Check if arguments are not numbers.
    }

    return numOne + numTwo; // Return the sum if both arguments are valid.
}
