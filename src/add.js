function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    } 
    
    if (typeof numOne != 'number' || typeof numTwo != 'number') {
        console.log(numOne, numTwo);
        return undefined;
    }

    return numOne + numTwo;
}

// 1.1: 4 tests

// 1.2: 'describe' is used to state what it is that is being tested e.g a function
// and 'it' is used to state what it should look like

// 1.3: 