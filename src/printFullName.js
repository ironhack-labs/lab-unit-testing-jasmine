function printFullName(nameObject) {
    if(typeof(nameObject) !== "object"){
        return undefined
    }
    if(typeof nameObject.firstName !== "string" || typeof nameObject.lastName !== "string"){
        return undefined
    }

    return nameObject.firstName+" "+nameObject.lastName
}