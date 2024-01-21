// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("The function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("The function should take two numbers as arguments.", ()=> {
            expect(calculateArea.length).toBe(2);
        })
        it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea(2, 10)).toEqual(20);
            expect(calculateArea(5, 5)).toEqual(25);
            expect(calculateArea(100, 3)).toEqual(300);
        })
        it("In case any of the arguments is not provided, the function should return undefined.", () => {
            expect(calculateArea(1)).toBe(undefined);
            expect(calculateArea()).toBe(undefined);
            expect(calculateArea(4, undefined)).toBe(undefined);

        })

    })    
})

