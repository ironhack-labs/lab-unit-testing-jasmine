// UNCOMMENT THE CODE BELOW TO START



describe("printFullName", () => {
    describe("Function - printFullName", () => {

        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(printFullName).toBeDefined();
        });
        it("The function should take one argument", () => {
            expect(printFullName.length).toBe(1);
        });
        it("The function should return a string with the first name and the last name separeted by a space", () => {
            expect(printFullName({firstName: "Joe", lastName: "Vegas"})).toEqual("Joe Vegas");
            expect(printFullName({firstName: "Nate", lastName: "French"})).toEqual("Nate French");
        });
        it("the function should return undefined in case any of the properties are not provided", () => {
            expect(printFullName({firstName: "Joe"})).toEqual(undefined);
            expect(printFullName({lastName: "Vegas"})).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
        });
        it("The function should return undefined in case any of the arguments are not an object", () => {
            expect(printFullName("")).toEqual(undefined);
            expect(printFullName(111)).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined);
        });
        it("Should return undefined if firstName and lastName are not strings", () => {
            expect(printFullName({firstName: 22, lastName:""})).toEqual(undefined);
            expect(printFullName({firstName:"", lastName: false})).toEqual(undefined);
            expect(printFullName({firstName: 22, lastName: true})).toEqual(undefined);
        });


    })    
})








/* 
In this iteration, your task is to write the unit tests for the printFullName function and then implement the function.

Files: tests - tests/printFullName.test.js | code - src/printFullName.js


Here are the requirements for the printFullName function:

 
The function should take one argument of type object. The object should have two properties: firstName and lastName.
The function should return a string with the first name and the last name separated by a space.
In case the argument passed is not an object, the function should return undefined.
In case the firstName or lastName properties are not provided, the function should return undefined.
 */