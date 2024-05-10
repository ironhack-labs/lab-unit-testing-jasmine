function add (numOne, numTwo) {
    

    if (isNaN(numOne)|| isNaN(numTwo)) {
        return undefined;
    }

    return numOne + numTwo;
}

add(1, "green")