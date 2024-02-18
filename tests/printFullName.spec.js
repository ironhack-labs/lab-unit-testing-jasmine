// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument of a type object", () => {
            expect(printFullName.length).toBe(1)    
        }); 

        it("should return a string with the first name and last name separated by a space", () => {
            expect( printFullName ({ firstName: "Michael", lastName: "Misurell" }) ) .toEqual("Michael Misurell");
            expect( printFullName ({ firstName: "John", lastName: "Doe" })) .toEqual("John Doe");
        });

        it("in case the argument passed is not an object, it should be undefined", () => {
            expect(printFullName ({firstName: "Michael"})).toEqual(undefined);
            expect(printFullName (123)).toEqual(undefined);
            expect(printFullName (true)).toEqual(undefined);
        });
});

function printFullName(obj) {
    if (typeof obj != "object"){
        return undefined;
    }
    if (typeof obj.firstName != "string" || typeof obj.lastName !== "string") {
        return undefined;
    }

    return obj.firstName + " " + obj.lastName;
}
})