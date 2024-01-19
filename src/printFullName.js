function printFullName(names) {
    if (typeof names !== "object")return undefined;
        
    // if (typeof names.firstName != "string" || typeof names.lastName != "string ") return undefined;
    
    return names.firstName + " " + names.lastName;
}

// Write an object with the properties firstName: John and lastName: Doe
let person = {firstName:"John",lastName:"Doe"};
console.log(printFullName(person))