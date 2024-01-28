function printFullName(objectName) {

    if (typeof objectName !== "object") {
        return undefined
    }

    if (objectName.firstName !== "string" || objectName.lastName !== "string") {
        return undefined
    }

    return objectName.firstName + " " + objectName.lastName;

    //return `${objectName.firstName} ${objectName.lastName}`
    
}