// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("function should be defined", function() {
            expect(printFullName).toBeDefined();
        });

        it("The function should take one argument", function() {
            expect(printFullName.length).toBe(1);
        });
        it("should return a string with the *first name* and the *last name* separated by a space", function() {
            expect(printFullName({firstName: "Maria", lastName: "Doida"})).toEqual("Maria Doida");
            expect(printFullName({firstName: "Miguel", lastName: "Chito"})).toEqual("Miguel Chito");
            expect(printFullName({firstName: "Jovem", lastName: "Velho"})).toEqual("Jovem Velho")
        });

        it("should return undefined if any of the two arguments is not a object", function() {
            expect(printFullName(2)).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined);
            expect(printFullName("Miguel")).toEqual(undefined);
        });

        it("should return undefined if any of the firstName or lastName properties are not provided", function() {
            expect(printFullName({firstName: undefined})).toEqual(undefined);
            expect(printFullName({lastName: undefined})).toEqual(undefined);
        });

        it("should return undefined if any of the firstName or lastName properties are not strings", function() {
            expect(printFullName({firstName: 249})).toEqual(undefined);
            expect(printFullName({lastName: true})).toEqual(undefined);
        });

    })    
})

