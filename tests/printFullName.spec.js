// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
          });

        it("should take one argument", () => {
            expect(printFullName.length).toBe(1);
          });

        it("should return undefined if firstName or lastName fields are missing", () => {
            expect(printFullName({firstName: "Max"})).toEqual(undefined);
            expect(printFullName({lastName: "Light"})).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
          });

        it("should return undefined if the argument is not an object", () => {
            expect(printFullName([9, 6, 4])).toEqual(undefined);
            expect(printFullName("Can")).toEqual(undefined);
            expect(printFullName(undefined)).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined);
        });


        it("should return undefined if any of the properties does not have string values", () => {
            expect(printFullName({ firstName: 67, lastName: "5" })).toEqual(undefined);
            expect(printFullName({ firstName: "John", lastName: [5, 8] })).toEqual(undefined);
            expect(printFullName({ firstName: 1, lastName: 2 })).toEqual(undefined);
        });


        it("should return a string with the first name and last name separated by a space", () => {
            expect(printFullName({firstName: "Max", surname: "Light"})).toEqual("Max Light");
            expect(printFullName({firstName: "Can", surname: "Asikoglu"})).toEqual("Can Asikoglu");
        });

    })    
})

