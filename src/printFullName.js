function printFullName(nameObject) {
    if (typeof nameObject != "object") {
        return undefined;
    }

    if (!nameObject.firstName || !nameObject.lastName) {
        return undefined;
    }

    // Return string
    return `${nameObject.firstName} ${nameObject.lastName}`
}

console.log(printFullName("banana"));