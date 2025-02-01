function add (numOne, numTwo) {
    if(arguments.length > 2){
        console.log("Too many arguments!");
        return undefined
    } else if(arguments.length <2){
        return undefined
    } else if(typeof(numOne) != "number" || typeof(numTwo) != "number"){
        return undefined;
    } else if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    return numOne + numTwo;
}

//Test 
// Return the sum of two numbers
console.log(add(1, 2)); // Return 3

// Return undefined if any of the arguments is not provided
console.log(add(2)); // Return undefined

// Return "Too many arguments!" if length is more than 2 then undefined
console.log(add(2,2,2,2)) // Return "Too many arguments!" then undefined

// Return undefined if any of the arguments is not a number
console.log(add(2,"2")); // Return undefined

// Return undefined if an argument is undefined
console.log(add(2, undefined)); // Return undefined
 