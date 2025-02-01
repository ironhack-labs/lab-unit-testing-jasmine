function calculateArea(a,b) {
    if(arguments.length > 2){
        return undefined
    } else if(arguments.length <2){
        return undefined
    } else if(typeof(a) != "number" || typeof(b) != "number"){
        return undefined;
    } else if (a == undefined || b == undefined) {
        return undefined;
    }
    return a*b;

}

//Test

// The function should take two numbers as arguments.
console.log(calculateArea(4,2)); // return 8
console.log(calculateArea(4)); //return undefined
console.log(calculateArea(1,2,4)); //return undefined


//The function should product the division of the two numbers.
console.log(calculateArea(3,2)); // return 6

//The function should return undefined if any of the arguments is not provided
console.log(calculateArea(4)); //return undefined
console.log(calculateArea(4,"4")); //return undefined
console.log(calculateArea("4",4)); //return undefined
console.log(calculateArea()); //return undefined
console.log(calculateArea(undefined, 4)); //return undefined
console.log(calculateArea(2, undefined)); //return undefined
