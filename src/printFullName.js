function printFullName(name) {
    if (typeof name !== "object") {
        return undefined
    }

    if (name.firstName === undefined || name.lastName === undefined){
        return undefined
    }

    //for practice

    if(typeof name.firstName !== "string" || typeof name.lastName !== "string"){
        return undefined
    }
    return name.firstName + " " + name.lastName;
}


const newName = {
    firstName: "bomba",
    lastName: "joe"
}

console.log(printFullName(newName))
