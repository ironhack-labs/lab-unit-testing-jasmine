// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {


        it("should be defined", () => {
            expect(printFullName).toBeDefined()
        });

        it(`should take one argument of type object with the properties "firstName" and "lastName"`, () => {
            expect(printFullName.length(typeof Object(2))).toBe(firstName, lastName)
        });

        it(`should return a string with the "first name" and the "last name" separated by a space`, () => {
            expect(printFullName).toEqual(printFullName.length(typeof Object(2) + " "))
        });

        it("should return undefined if any of the two properties is not provided", () => {
            expect(printFullName(1)).toEqual(undefined)
            expect(printFullName()).toEqual(undefined)
            expect(printFullName(undefined, 1)).toEqual(undefined)
        });

    })
})

