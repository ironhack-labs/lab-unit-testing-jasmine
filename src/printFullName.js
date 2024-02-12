function printFullName(object) {
    if (typeof object !== 'object') {
            return undefined;
    }
    if (object.firstName == undefined || object.lastName == undefined) {
        return undefined;
    }
    if ((typeof object.firstName !== 'string') || (typeof object.lastName !== 'string')){
        return undefined;
    }
    return object.firstName + " " + object.lastName;
}