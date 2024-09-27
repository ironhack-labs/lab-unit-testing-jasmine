

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
    });
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        
        it("should multiply to numbers together", () => {
            expect(calculateArea(2, 5)).toEqual(10);
            expect(calculateArea(4, 20)).toEqual(80);
            expect(calculateArea(7, 3)).toEqual(21);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
        it("should return undefined if any of the arguments are not numbers", ()=> {
            expect(calculateArea(2, "6")).toEqual(undefined);
            expect(calculateArea("40", 2)).toEqual(undefined);
            expect(calculateArea("7", "2")).toEqual(undefined); 
    });
})
})
