function printFullName(name) {

    if(typeof name !== 'object') {
        return undefined;
    } else if(!name.firstName || !name.lastName) {
        return undefined;
    } else if(typeof name.firstName !== 'string' || typeof name.lastName !== 'string') {
        return undefined;
    }

    return `${name.firstName} ${name.lastName}`
}