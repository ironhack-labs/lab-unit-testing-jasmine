// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Function calculate:", () => {
            expect(calculateArea).toBeDefined();
        });

        it("Should take two arguments:", ()=>{
            expect(calculateArea.length).toBe(2)
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);
          });

        it("should return product of two arguments:",()=>{
            expect(calculateArea(2, 3)).toEqual(6);
        })
    })    
})

