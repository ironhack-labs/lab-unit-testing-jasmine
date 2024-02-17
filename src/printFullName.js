function printFullName() {
    if (typeof person !== 'object' || !person.firstName || !person.lastName) {
    return undefined
}

return person.firstName + ' ' + person.lastName
}

    
