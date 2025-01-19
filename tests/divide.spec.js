// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
            expect(divide(1, "string")).toEqual(undefined);
            expect(divide("string")).toEqual(undefined);
            expect(divide("string", 1)).toEqual(undefined);
            expect(divide(1, undefined)).toEqual(undefined);
            expect(divide(undefined)).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
            expect(divide(1, null)).toEqual(undefined);
            expect(divide(null)).toEqual(undefined);
            expect(divide(null, 1)).toEqual(undefined);
            expect(divide(1, true)).toEqual(undefined);
            expect(divide(true)).toEqual(undefined);
            expect(divide(true, 1)).toEqual(undefined);
            expect(divide(1, false)).toEqual(undefined);
            expect(divide(false)).toEqual(undefined);
            expect(divide(false, 1)).toEqual(undefined);
            expect(divide(1, [])).toEqual(undefined);
            expect(divide([])).toEqual(undefined);
            expect(divide([], 1)).toEqual(undefined);
            expect(divide(1, {})).toEqual(undefined);
            expect(divide({})).toEqual(undefined);
            expect(divide({}, 1)).toEqual(undefined);

        });

        it("should return the division of the two numbers", () => {
            expect(divide(4,2)).toEqual(2);
            expect(divide(10,1)).toEqual(10);
            
        });

        it("should return undefined if any of the two arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
            expect(divide(1, undefined)).toEqual(undefined);
        });

    })    
})
