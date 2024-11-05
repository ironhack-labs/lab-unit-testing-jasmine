function calculateArea(numOne, numTwo) {
    if(numOne == undefined || numTwo == undefined){
        return undefined;
    }
    if(typeof numOne !== "number" || typeof numTwo !== "number"){
        return undefined;
    }
    console.log("area", numOne * numTwo);
    return numOne * numTwo;
}