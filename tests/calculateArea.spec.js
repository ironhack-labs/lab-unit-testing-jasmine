describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(calculateArea).toBeDefined();
        });
        it ("The function should take two argument.", () => {
            expect(calculateArea.length).toBe(2);
        });
        it ("The function should return the area of a rectangle.", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(100, 47)).toEqual(4700);
            
        });

    })    
})

