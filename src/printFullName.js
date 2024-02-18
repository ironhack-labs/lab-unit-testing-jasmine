let name = {
    firstName : "",
    lastName : ""
}

function printFullName(name) {

    if (typeof name !== "object"){
        return undefined;
    }if (typeof name.firstName != "string" || typeof name.lastName != "string"){
        return undefined;
    }

    return name.firstName + " " + name.lastName;
}   