// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(printFullName).toBeDefined()
        });
        it("The function should take one argument", () => {
            expect(printFullName.length).toBe(1);
        })
        it ("The argument should be an object", () => {
            expect(printFullName("maria carvalho")).toEqual(undefined);
            expect(printFullName(123)).toEqual(undefined);
        })
        it("The function should return a string with the first name and the last name separated by a space.", () => {
            expect(printFullName({firstName: "maria", lastName: "carvalho"})).toEqual("maria carvalho");
            expect(printFullName({firstName: "john", lastName: "doe"})).toEqual("john doe");
            expect(printFullName({firstName: "joao", lastName: "souza"})).toEqual("joao souza");
        })
        it("In case the argument passed is not an object, the function should return undefined", () => {
            expect(printFullName("fernanda")).toBe(undefined);
        })
        it("In case the firstName or lastName properties are not provided, the function should return undefined.", () => {
            expect(printFullName({firstName:"fernanda"})).toBe(undefined);
            expect(printFullName({lastName: "carvalho"})).toBe(undefined);
        })

    })    
})

