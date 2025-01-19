// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();});
        
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(5, 8)).toEqual(40);
            expect(calculateArea(4, 8)).toEqual(32);
            expect(calculateArea(7, 10)).toEqual(70);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined,1)).toEqual(undefined);
        });
        it("should return undefined if any of the arguments is not number",() => {
            expect(calculateArea("1",1)).toEqual(undefined);
            expect(calculateArea(1,"1")).toEqual(undefined);
            expect(calculateArea("1","1")).toEqual(undefined);
        })

    })    
})

