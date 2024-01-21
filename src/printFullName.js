const name = {
    firstName: "",
    lastName: ""
}

function printFullName(name) {
   if (name.firstName === undefined || name.lastName === undefined) {
    return undefined;
   }
   if(typeof name !== "object") {
    return undefined;
   }
   return `${name.firstName} ${name.lastName}`;
    
}