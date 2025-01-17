function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        console.log("case 1");
        return undefined;
    }else if(typeof numOne != 'number' || typeof numTwo != 'number'){
        console.log("case 2");
        return undefined;
    }
    console.log(numOne, numTwo)
    return numOne + numTwo;
}

console.log(add("1",1));