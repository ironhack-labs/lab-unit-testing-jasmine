// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one object as an argument. ", () => {
            expect(printFullName.length).toBe(1);
        });

        it("should return a string with a first name and a last name separated by a space", () => {
            expect(printFullName({firstName: "Neil", lastName: "Gaiman"})).toEqual("Neil Gaiman");
            expect(printFullName({firstName: "Stephen", lastName: "King"})).toEqual("Stephen King");
        });

        it("should return undefined if the argument passed is not an object", () => {
            expect(printFullName("John Smith")).toEqual(undefined);
            expect(printFullName(808833)).toEqual(undefined);
            expect(printFullName()).toEqual(undefined);
        });

        it("should return undefined if the firstName or lastName properties are not provided", () => {
            expect(printFullName({firstName: "Pinocchio"})).toEqual(undefined);
            expect(printFullName({lastName: "Gucci"})).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
            
        });
    })    
})
