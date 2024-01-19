describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument", () => {
            expect(printFullName.length).toBe(1);
        });

        it("should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({firstName: "Ana", lastName: "García"})).toEqual("Ana García");
            expect(printFullName({firstName: "Pepe", lastName: "Pérez"})).toEqual("Pepe Pérez");
        });

        it ("should return undefined if the argument passed is not an object", () => {
            expect(printFullName(1)).toEqual(undefined);
            expect(printFullName("Manolo Torres")).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined);
        });

        it("should return undefined the firstName or lastName properties are not provided", () => {
            expect(printFullName({firstName: "Ana"})).toEqual(undefined);
            expect(printFullName({lastName: "García"})).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
        });
    });    
});