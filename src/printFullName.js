function printFullName(name) {
    if (typeof name.firstName !== "string"|| typeof name.lastName !== "string" ) {
        return undefined;
    }
    else if (typeof name !== "object") {
        return undefined;
    }

    return `${name.firstName} ${name.lastName}`
    
}



