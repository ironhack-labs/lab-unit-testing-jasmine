// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("the function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("the function should take two number as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("the function should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(2, 2)).toEqual(4);
            expect(calculateArea(3, 5)).toEqual(15);
            expect(calculateArea(7, 7)).toEqual(49);
            expect(calculateArea(9, 8)).toEqual(72);
        });

        it("in case any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea(undefined, 20)).toEqual(undefined);
            expect(calculateArea(15, undefined)).toEqual(undefined);
            expect(calculateArea(undefined, undefined)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () =>{
            expect(add("a", 1)).toEqual(undefined);
            expect(add(1, "a")).toEqual(undefined);
            expect(add("b", "a")).toEqual(undefined);
        });

    });
});
