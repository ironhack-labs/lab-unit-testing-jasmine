describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("The function should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("The function should take two numbers as arguments", () => {
        expect(divide.length).toBe(2);
        });
        it("The function should return the division of the two numbers", () => {
        expect(divide(4,2)).toEqual(2);
        expect(divide(100,2)).toEqual(50);
        });
        it("The function should return `undefined` if any of the arguments is not provided", () => {
        expect(divide(undefined,4)).toEqual(undefined);
        expect(divide(5, undefined)).toEqual(undefined);
        expect(divide(undefined,undefined)).toEqual(undefined);
        });
        it("The function should return undefined if any of the two arguments is not a number.",()=>{
        expect(add(undefined,4)).toEqual(undefined);
        expect(add(5, undefined)).toEqual(undefined);
        expect(add(undefined,undefined)).toEqual(undefined);
      });

    })    
})

