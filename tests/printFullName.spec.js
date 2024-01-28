describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument of type object. The object should have two properties: 'first name' and 'last name'", () => {
            expect(printFullName()).toBe();
        });

        it("should return a string with the 'first name' and the 'last name' separated by a space", () => {
            expect(printFullName("Pablo", "Sanchez")).toBeDefined();
        });

        it("should return undefined in case the argument passed is not an object", () => {
            expect(printFullName()).toEqual(undefined);
            expect(printFullName(9)).toEqual(undefined);
            expect(printFullName("name")).toEqual(undefined);
            expect(printFullName(undefined)).toEqual(undefined);
            expect(printFullName(null)).toEqual(undefined);
        });

        it("should return undefined in case 'first name' or 'last name' properties are not provided", () => {
            expect(printFullName(undefined,"Sanchez")).toEqual(undefined);
            expect(printFullName()).toEqual(undefined);
            expect(printFullName("Salguero")).toEqual(undefined);
            expect(printFullName("Amelia",)).toEqual(undefined);
        });

    })    
})