function printFullName(object) {

    if (typeof object === 'object' && (object.firstName && object.lastName)) {
        return `${object.firstName} ${object.lastName}`
    } else {
        return undefined;
    }
    
}