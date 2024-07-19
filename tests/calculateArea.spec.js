// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("Should be defined", () => {
            expect(calculateArea).toBeDefined()
        })

        it("Should take two arguments", () => {
            expect(calculateArea.length).toBe(2)
        })

        it("Should return the product of the two numbers", () =>{
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(100, 47)).toEqual(4700);
        })

        it("Should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea('1', 2)).toEqual(undefined);
            expect(calculateArea({}, 2)).toEqual(undefined);
            expect(calculateArea([], 2)).toEqual(undefined);
            expect(calculateArea(1, '2')).toEqual(undefined);
            expect(calculateArea(1, {})).toEqual(undefined);
            expect(calculateArea("1", "2")).toEqual(undefined);
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    })    
})
