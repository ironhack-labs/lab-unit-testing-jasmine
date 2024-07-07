// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {

        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expected(divide(54, 9)).toEqual(6);
            expect(divide(2000, 100)).toEqual(20);
        })

        it("should return undefined if any of the arguments is not privided", () => {
            expect(divide(2)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 3)).toEqual(undefined)
        });
    });

});



/*Here are the requirements for the divide function:

    The function should be defined.
The function should take two numbers as arguments.
The function should return the division of the two numbers.
The function should return undefined if any of the arguments is not provided*/
