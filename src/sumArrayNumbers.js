function sumArrayNumbers(arr) {
if (!Array.isArray(arr)) {
    return undefined;
}

let sum = 0;

arr.forEach(function (num) {
    if(typeof num === "number") {
        sum += num
    }
})
return sum

}