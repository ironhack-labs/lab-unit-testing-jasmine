describe("Iteration 4 | Print Full Name", () => {
    describe("Function - printFullName", () => {
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument of type object", () => {
            expect(printFullName.length).toBe(1);
        });

        it("should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({ firstName: "Jack", lastName: "Daniels" })).toEqual("Jack Daniels");
            expect(printFullName({ firstName: "Gabriel", lastName: "John" })).toEqual("Gabriel John");
        });

        it ("should return undefined if the argument passed is not an object", () => {
            expect(printFullName()).toEqual(undefined);
            expect(printFullName("Jack Daniels")).toEqual(undefined);
            expect(printFullName(12345)).toEqual(undefined);
            expect(printFullName(false)).toEqual(undefined);
        });

        it("should return undefined if firstName or lastName properties are not provided", () => {
            expect(printFullName({ firstName: "Jack" })).toEqual(undefined);
            expect(printFullName({ lastName: "Daniels" })).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
        });

         // REFACTOR - Additional test
        it("should return undefined if the firstName or lastName properties are not strings", () => {
            expect(printFullName({ firstName: 1234, lastName: "Doe" })).toEqual(undefined);
            expect(printFullName({ firstName: "Gabriel", lastName: null })).toEqual(undefined);
            expect(printFullName({ firstName: 1234, lastName: 5 })).toEqual(undefined);
      });
    })    
})

