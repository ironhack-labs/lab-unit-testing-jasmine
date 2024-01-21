function printFullName(listObj) {
    if (typeof listObj !== {}) {
        return undefined;
    }
    return `${listObj.firstName} ${listObj.lastName}`;
}
