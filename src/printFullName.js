function printFullName(obj) {
    if (typeof obj !== "object") {
        return undefined;
    }
    if (obj.firstName == undefined || obj.lastName == undefined) {
        return undefined;
    }
    return obj.firstName + " " + obj.lastName
}
