// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2 | Divide ", () => {
    describe("Function - divide", () => {

        it("should be defined", () => {
            expect(divide).toBeDefined();
        })

        it("take two numbers as argument", () => {
            expect(divide.length).toBe(2);
        })


        it(" should return the division of the two numbers.", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(20, 10)).toEqual(2);
            expect(divide(90, 10)).toEqual(9);
        })

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(8)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        })




    })

})