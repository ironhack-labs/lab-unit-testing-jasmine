describe("Iteration 2 | Divide function", () => {
    describe("Function - divide", () => {
        it("Should be defined", () => {
            expect(divide).toBeDefined();
        })
        
        it("Should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("Should return the division of the two numbers", () => {
            expect(divide(10,2)).toEqual(5);
            expect(divide(100,10)).toEqual(10);
            expect(divide(5,2)).toEqual(2.5);
        });

        it("Should return undefiend if any of the arguments is not provided", () => {
            expect(divide(undefined,2)).toEqual(undefined);
            expect(divide(2,undefined)).toEqual(undefined);
            expect(divide()).toEqual(undefined)
        });

    })
})
