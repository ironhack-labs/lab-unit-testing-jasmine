

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("Take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("Two return area of the rectangle", () => {
            expect(calculateArea(10,5)).toEqual(50);
            expect(calculateArea(2,3)).toEqual(6);
        });
        it("Return undefine in case any of the arguments are not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined,1)).toEqual(undefined);
        });

    })    
})

