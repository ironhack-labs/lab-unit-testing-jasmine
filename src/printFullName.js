function printFullName(fullName) {
    if (typeof fullName != "object" || !fullName.firstName || !fullName.lastName) {
        return undefined
    }
    
    return fullName.firstName + " " + fullName.lastName
}