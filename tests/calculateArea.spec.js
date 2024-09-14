describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", ()=>{
            expect(calculateArea.length).toBe(2);
        })

        it("should return undefined if any argument is not a Number", ()=>{
            expect(calculateArea('1')).toBe(undefined);
            expect(calculateArea(1,'2')).toBe(undefined);
        })

        it("should return a number representing the area of a rectangle", ()=>{
            expect(calculateArea(3,5)).toBe(15);
            expect(calculateArea(10,20)).toBe(200);
        })

        it("should return undefined if any argument missing", ()=>{
            expect(calculateArea()).toBe(undefined);
            expect(calculateArea(1)).toBe(undefined);
            expect(calculateArea(10, undefined)).toBe(undefined);
        })
    })    
})

/*

In case any of the arguments is not provided, the function should return undefined.
*/