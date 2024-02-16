function printFullName(fullName) {
    if (typeof fullName !== "object" || typeof fullName.firstname !== "string" || typeof fullName.lastname !== "string"){
        return undefined
    }
    return fullName.firstname + " " + fullName.lastname
}