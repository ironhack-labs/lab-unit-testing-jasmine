// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("Should take an object as argument", () => {
            expect(printFullName.length).toBe(1);
        });

        it("Should return a string with the first name and the last name separated by a space.", () => {
            expect(printFullName({firstName : "Alexandra", lastName: "Busson"})).toEqual("Alexandra Busson");
            expect(printFullName({firstName: "Anthony", lastName: "Barraud"})).toEqual("Anthony Barraud");
            expect(printFullName({firstName: "Nova", lastName:"Barraud"})).toEqual("Nova Barraud");
        });

        it("Should return unedfined if the argument isn't an object", () => {
            expect(printFullName("John Doe")).toEqual(undefined);
            expect(printFullName(253)).toEqual(undefined);
            expect(printFullName()).toEqual(undefined);
        });

        it("Should return undefined if one of the property isn't provided", () => {
            expect(printFullName({firstName : "Alexandra", lastName: undefined})).toEqual(undefined);
            expect(printFullName({firstName : undefined, lastName: "Busson"})).toEqual(undefined);
            expect(printFullName({firstName : undefined, lastName: undefined})).toEqual(undefined);
        });

    })    
})

