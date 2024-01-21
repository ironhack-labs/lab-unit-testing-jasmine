// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4 | Print Full Name", () => {
    describe("Function printFullName", () => {
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        })
        it("should take one argument", () => {
            expect(printFullName.length).toBe(1);
        })
        it("should return a string with first name and last name separated by a space", () => {
            expect(printFullName({firstName: "Rui", lastName: "Marques"}) ).toEqual("Rui Marques");
            expect(printFullName({firstName: "Pedro", lastName: "Ramos"}) ).toEqual("Pedro Ramos");
        })
        it("should return undefined if not an object", () => {
            expect(printFullName("")).toEqual(undefined);
            expect(printFullName([])).toEqual(undefined);
            expect(printFullName(0)).toEqual(undefined);
        })
        it("should return undefined if firstName or lastName is missing", () => {
            expect(printFullName({firstName: "Rui", lastName: 50})).toEqual(undefined);
            expect(printFullName({firstName: 50, lastName: "Pedro"})).toEqual(undefined);
            expect(printFullName({lastName: "Mendes"})).toEqual(undefined);
        });
    });
});