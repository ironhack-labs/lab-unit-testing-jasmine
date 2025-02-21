function calculateArea(numOne,numTwo) {
    const area  =(numOne * numTwo);
    if (typeof  numOne != "number"|| typeof numTwo != "number") {
        return undefined;
}
return area;
}
calculateArea (20,2);