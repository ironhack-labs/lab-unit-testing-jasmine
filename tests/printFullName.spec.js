// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("the function should be defined", () => {

            expect(printFullName).toBeDefined()

        });

        it("should take one argument of type object", () => {


            expect(printFullName.length).toBe(1);

        });


        it("should return a string with the first name and the last name separated by a space", () => {

            expect(printFullName({ firstName: "Ed", lastName: "Coe" })).toEqual("Ed Coe");


        });


    })
})