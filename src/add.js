function add (numOne, numTwo) {
    if(numOne == undefined || numTwo == undefined ||
        typeof numOne !== "number" || typeof numTwo !== "number")
{return undefined}
 else
    {return numOne + numTwo}
}

console.log(add(1,2))