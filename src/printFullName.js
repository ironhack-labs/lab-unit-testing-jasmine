const nameObject = {
    "firstName": "Albert",
    "lastName": "Einstein"
}


function printFullName(someObject) {
    if (typeof someObject !== "object") {
        return undefined;
    }
    
    if (!("firstName" in someObject) || !("lastName" in someObject)) {
        return undefined;
    }

    return `${someObject.firstName} ${someObject.lastName}`
}

console.log(typeof nameObject)