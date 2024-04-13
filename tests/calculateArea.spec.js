
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("Should be defined", () =>{
            expect(calculateArea).toBeDefined();
        });

        it("Should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it ("Should return the calculation of the total area (height*width)", () => {
            expect(calculateArea(10,5)).toEqual(50);
            expect(calculateArea(30,7)).toEqual(210);
            expect(calculateArea(3,5)).toEqual(15);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });

          it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(10, "33")).toEqual(undefined); 
            expect(calculateArea("45", 33)).toEqual(undefined);
            expect(calculateArea("100", "33")).toEqual(undefined); 
        });
    })    
})
