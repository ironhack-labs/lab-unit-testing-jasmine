function printFullName(objName) {
    if(typeof objName !== "object"){
        return undefined
    }
    if ( typeof objName.firstName !== "string" || typeof obj.lastName !== "string"){
        return undefined;
    }
    return objName.firstName + " " + objName.lastName;
}
