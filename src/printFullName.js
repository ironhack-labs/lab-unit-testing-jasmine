function printFullName(object) {
    if (typeof object !== 'object') {
        return undefined;
    }
    else if (!(typeof object.firstName === 'string') || !(typeof object.lastName === 'string')) {
        return undefined;
    }
    else {
        return object.firstName + " " + object.lastName;
    }
}

// const object ={
//     firstName :"hi",
// }
// console.log(printFullName(object));