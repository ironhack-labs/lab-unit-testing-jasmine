// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined.", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument", () => {
            expect(printFullName.length).toEqual(1)
        });

        it("should return a string with the first name and the last name separated.", () => {
            expect(printFullName({ firstName: "firstName", lastName:"lastName" })).toEqual("firstName lastName");
            expect(printFullName({ firstName: "FirstName", lastName:"LastName"})).toEqual("FirstName LastName")
        });

        it("should return undefined if the argument passed is not an object", () => {
            expect(printFullName('firstName lastName')).toEqual(undefined);
            expect(printFullName(1)).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined);
        });
        
        it("should return undefined if firstName or lastName fields are missing",() => {
            expect(printFullName({firstName:"firstName"})).toEqual(undefined);
            expect(printFullName({lastName:"lastName"})).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
        })

        it("should return undefined if firstName or lastName are not strings",() => {
            expect(printFullName({firstName:1, lastName:"lastName"})).toEqual(undefined);
            expect(printFullName({firstName:"firstName", lastName:1})).toEqual(undefined);
            expect(printFullName({firstName:1, lastName:1})).toEqual(undefined);
    })    
})





/* 






*/