function printFullName(obj) {
        if (typeof obj !== "object" || obj === null) {
          return undefined;
        }
        if (typeof obj.firstName !== "string" || typeof obj.lastName !== "string") {
          return undefined;
        }
      
        return obj.firstName + " " + obj.lastName;
      }
   
//Test case
//console.log(printFullName({ firstName: "John", lastName: "Doe" }));


