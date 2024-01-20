function printFullName(objectType) {
    if (typeof objectType !== "object") {
        return undefined;
    }
 
    if (typeof objectType.firstName !== "string" || typeof objectType.lastName !== "string") {
        return undefined;
    }

    return objectType.firstName + " " + objectType.lastName;
    
}