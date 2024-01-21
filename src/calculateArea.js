function calculateArea(numOne, numTwo) {
    if (!numOne || !numTwo) {
        return undefined;
    }
    if (typeof numOne != 'number' || typeof numTwo != 'number') {
        return "Please enter two numbers.";
    }

    const result = numOne*numTwo;
    
    return `The area of a rectangle ${numOne} units tall and ${numTwo} units wide is ${result} square units.`
}