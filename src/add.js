function add (numOne, numTwo) {
    //if(isNaN(numOne)===true || isNaN(numTwo)===true){
    //    return undefined;
    //}

    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }

    console.log("type of 5", typeof 5);
    return numOne + numTwo;
}