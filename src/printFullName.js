function printFullName(person) {
  console.log(typeof person);
  if (typeof person === undefined) {
    console.log("not an object");

    return undefined;
  } 
//   console.log(Object.keys(person).includes("firstName"))
  else if (!Object.keys(person).includes("firstName") || !Object.keys(person).includes("lastName")) {
      console.log("property not included");
      return undefined
    }
    
  console.log(person.firstName);
  console.log(person.lastName);

  return `${person.firstName} ${person.lastName}`;
}

let customObject = {
  ffirstName: "Cat",
  lastName: "Stevens",
};

let mias;
console.log(printFullName(customObject));
