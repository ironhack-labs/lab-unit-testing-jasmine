// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        //Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () =>{
            expect(divide.length).toBe(2)
        });

        it("should return the division of the two arguments",() => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(15, 3)).toEqual(5);
            expect(divide(100, 25)).toEqual(4);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(4)).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide("2", 4)).toEqual(undefined);
            expect(divide(4, "2")).toEqual(undefined);
            expect(divide("5","1")).toEqual(undefined);
        });
    })    
})