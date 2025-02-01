function divide (a,b) {
    if(arguments.length > 2){
        return undefined
    } else if(arguments.length <2){
        return undefined
    } else if(typeof(a) != "number" || typeof(b) != "number"){
        return undefined;
    } else if (a == undefined || b == undefined) {
        return undefined;
    }
    return a/b;
}     

//Test

// The function should take two numbers as arguments.
console.log(divide(4,2)); // return 2
console.log(divide(4)); //return undefined
console.log(divide(1,2,3)); //return undefined


//The function should return the division of the two numbers.
console.log(divide(3,2)); // return 1.5

//The function should return undefined if any of the arguments is not provided or is not a number
console.log(divide(4)); //return undefined
console.log(divide(4,"4")); //return undefined
console.log(divide("4",4)); //return undefined
console.log(divide()); //return undefined
console.log(divide(undefined, 4)); //return undefined
console.log(divide(2, undefined)); //return undefined

console.log(divide(4,0)); //return infinity