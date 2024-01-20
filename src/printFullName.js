function printFullName(object) {

    if (typeof object !== 'object') {
        return undefined
    }
    if (typeof object.firstName !== 'string' || object.lastName !== 'string') {
        return undefined
    }

    return object.firstName + " " + object.lastName;

}