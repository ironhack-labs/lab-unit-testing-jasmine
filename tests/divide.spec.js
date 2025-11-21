describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(20, 5)).toEqual(4);
            expect(divide(100, 2)).toEqual(50);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefinded if any of the arguments is not a number", () => {
            expect(divide(1, "2")).toEqual(undefined);
            expect(divide("5", 2)).toEqual(undefined);
            expect(divide("101", "20")).toEqual(undefined);
        })
    })    
})

