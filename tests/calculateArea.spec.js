// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea.toBeDefined);
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
          it("should return the area of a rectangle for given width and height", () => {
            expect(calculateArea(5, 10)).toBe(50);
          });
    })    
});
