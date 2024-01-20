function printFullName(name) {
    if(typeof name !== "object"){
        return undefined;
    }else if(typeof name.firstName !== "string" || typeof name.lastName !== "string"){
        return undefined;
    }else{
        return `${name.firstName} ${name.lastName}`;
    }  
}
