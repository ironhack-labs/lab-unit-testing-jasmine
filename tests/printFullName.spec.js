// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {

        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument", () => {
            expect(printFullName.length).toBe(1);
        });

        it("should return a string with first and last name separated by spaces", () => {
            expect(printFullName({ firstName: "Lara", lastName: "Aguerre" })).toEqual("Lara Aguerre");
            expect(printFullName({ firstName: "Pedro", lastName: "Pascal" })).toEqual("Pedro Pascal")
        });

        it("should return undefined if the argument passed is not an object", () => {
            expect(printFullName("Lara Aguerre")).toEqual(undefined);
            expect(printFullName(10)).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined)
        });

        it("should return undefined if firstName or lastName are not strings", () => {
            expect(printFullName(10, "Aguerre")).toEqual(undefined);
            expect(printFullName("Lara", 10)).toEqual(undefined);
            expect(printFullName(10, 5)).toEqual(undefined)
        })
    })
})

