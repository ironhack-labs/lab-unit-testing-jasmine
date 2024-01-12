// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("it should take on argument", () => {
            expect(sumArrayNumbers.length).toBe(1);
        });

        it("should return the sum of all numbers in the array", () => {
            expect( sumArrayNumbers([1, 2, 3]) ).toEqual(6);
            expect( sumArrayNumbers([10, 20, 30]) ).toEqual(60);
            expect( sumArrayNumbers([8, 2, 10]) ).toEqual(20);
        });

        it("should return undefined if the argument passed it not an array", () => {
            expect( sumArrayNumbers("5") ).toEqual(undefined);
            expect( sumArrayNumbers( ) ).toEqual(undefined);
            expect( sumArrayNumbers(1010) ).toEqual(undefined);
        });

        it("should return 0 if the argument passed is an empty array", () => {
            expect( sumArrayNumbers([]) ).toEqual(0);
        });
    });    
});
