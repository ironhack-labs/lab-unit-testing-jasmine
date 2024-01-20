// UNCOMMENT THE CODE BELOW TO START
const nameObject1 = {
    firstName: "John",
    lastName: "Doe"
}
const nameObject2 = {
    firstName: "Harry",
    lastName: "Potter"
}
const nameObject3 = {
    lastName: "Potter"
}
const nameObject4 = {
    firstName: "Harry"
}
const nameObject5 = {

}


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });
        it("should take one argument", () => {
            expect(printFullName.length).toBe(1);
        });
        it("should return a string with the first name and last name separated by a space", () => {
            expect(printFullName(nameObject1)).toEqual("John Doe");
            expect(printFullName(nameObject2)).toEqual("Harry Potter");
        });
        it("should return undefined if the argument is not an object", () => {
            expect(printFullName([1, 2])).toEqual(undefined);
            expect(printFullName("hi")).toEqual(undefined);
            expect(printFullName(undefined)).toEqual(undefined);
        });


        it("should return undefined if any of the properties is not provided", () => {
            expect(printFullName({ firstName: "John" })).toEqual(undefined);
            expect(printFullName({ lastName: "Doe" })).toEqual(undefined);
            expect(printFullName()).toEqual(undefined);
        });
        it("should return undefined if any of the properties does not have string values", () => {
            expect(printFullName({ firstName: 1, lastName: "1" })).toEqual(undefined);
            expect(printFullName({ firstName: "John", lastName: 2 })).toEqual(undefined);
            expect(printFullName({ firstName: 1, lastName: 2 })).toEqual(undefined);
        });

    })
})

