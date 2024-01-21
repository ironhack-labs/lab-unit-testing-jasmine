// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        it("should be defined", () => {
            expect(printFullName).toBeDefined()
        });
        it("should take one argument", () => {
            expect(printFullName.length).toBe(1)
        });
        it("should return a string with first and last name separated by a space", () => {
            expect(printFullName({ firstName: "Mateus", lastName: "Lima" })).toEqual("Mateus Lima");
            expect(printFullName({ firstName: "Mateus", lastName: "Farias" })).toEqual("Mateus Farias");
        });
        it("should return undefined if the argumen passed is not an object", () => {
            expect(printFullName("John Doe")).toEqual(undefined);
            expect(printFullName(123)).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined)
        });
        it("should return undefined if firstName or lastName fields are missing", () => {
            expect(printFullName({ firstName: "John" })).toEqual(undefined);
            expect(printFullName({ lastName: "Doe" })).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined)
        });
        it("should return undefined if firstName or lastName are not strings", () => {
            expect(printFullName({ firstName: 123, lastName: "Doe" })).toEqual(undefined);
            expect(printFullName({ firstName: "Ed", lastName: 123 })).toEqual(undefined);
            expect(printFullName({ firstName: 123, lastName: 123 })).toEqual(undefined)
        });

    })
});