// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(4, 5)).toEqual(20);
            expect(calculateArea(3.2, 9)).toEqual(28.8);
            expect(calculateArea(0, 5)).toEqual(0);
        });
        it("should return undefined if any of the arguments is not provided", () =>{
            expect(calculateArea(undefined,3)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(4)).toEqual(undefined);
        })
        it("should return undefined if any of the arguments is not number", () =>{
            expect(calculateArea(",",3)).toEqual(undefined);
            expect(calculateArea("5", "8")).toEqual(undefined);
            expect(calculateArea("al")).toEqual(undefined);
        })



    })    
})

