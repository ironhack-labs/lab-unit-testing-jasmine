describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("The function should be defined.", () => {
            expect(divide).toBeDefined();
        });

        it("The function should take two numbers as arguments.", () => {
            expect(divide.length).toBe(2);
            
        } );

        it("The function should return the division of the two numbers.", () => {
            expect(divide(2, 2)).toEqual(1);
            expect(divide(4, 2)).toEqual(2);
            expect(divide(10, 20)).toEqual(0.5);
            expect(divide(16, 4)).toEqual(4);
        });

        it("The function should return undefined if any of the arguments is not provided.", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(1)).toEqual(undefined);
            expect(divide(1, undefined)).toBeUndefined;
        });

        it("The function should return undefined if any of the arguments is not a number.", () => {
            expect(divide(10, 2)).not.toBeUndefined();
            expect(divide(10, "aaa")).toBeUndefined();
            expect(divide(10, null)).toBeUndefined();
            expect(divide(10, undefined)).toBeUndefined();
            expect(divide(10, "")).toBeUndefined();
        })

    })    
})


