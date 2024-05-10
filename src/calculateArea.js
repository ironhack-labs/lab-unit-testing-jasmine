function calculateArea(widthA, heigB) {

    if(typeof widthA !== "number" || typeof heigB !== "number"){
        return undefined;
    }

    return widthA*heigB

}

console.log(calculateArea(-1, 2));
console.log(calculateArea(20, 2));
console.log(calculateArea(40, 100));
console.log(calculateArea("aaaa", 7));