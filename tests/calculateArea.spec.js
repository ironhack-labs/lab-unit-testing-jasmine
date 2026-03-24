// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () =>{
        
    it("should return 20 for length=4 and width=5",()=> {
    expect(calculateArea(4, 5)).toBe(20);
        });

    it("should return 0 if length or width 0",() => {
       expect(calculateArea(0,5)).toBe(0);
       expect(calculateArea(0,4)).toBe(0);
    });
    
    it("should handle decimal numbers", () =>{
        expect(calculateArea(2.5, 4)).toBe(10);
     });

    });   
});

