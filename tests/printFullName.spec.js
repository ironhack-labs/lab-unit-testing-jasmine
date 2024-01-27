// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        /*it("The function should take one argument of type object. The object should have two properties: firstName and lastName", () => {
            expect(printFullName()).toEqual(typeof object) && expect(printFullName({})).toBe({firstName, lastName});
        });*/

        it("The function should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({firstName: "pepe", lastName: "olivares"})).toEqual("pepe olivares");
            expect(printFullName({firstName: "nicole", lastName: "kidman"})).toEqual("nicole kidman");

        });

        it("In case the argument passed is not an object, the function should return undefined", () => {
            expect(printFullName("string")).toEqual(undefined);
            expect(printFullName(23)).toEqual(undefined);
        });

        it("In case the firstName or lastName properties are not provided, the function should return undefined", () => {
            expect(printFullName({firstName: "pepe"})).toEqual(undefined);
            expect(printFullName({lastName: "olivares"})).toEqual(undefined);
        });

    })    
})

