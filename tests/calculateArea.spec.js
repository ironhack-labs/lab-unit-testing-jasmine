// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two arguments", ()=> {
            expect(calculateArea.length).toBe(2);
        })
        it("should return the area of the rectangle", ()=> {
            expect(calculateArea(12,32)).toBe(384);
            expect(calculateArea(35,27)).toBe(945);
        })
        it("should return undefined if an argument is not provided", () => {
            expect(calculateArea(2)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(3, undefined)).toEqual(undefined);
        })
        it ("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(1,"3")).toEqual(undefined);
            expect(calculateArea("3",3)).toEqual(undefined);
            });

    })    
})

