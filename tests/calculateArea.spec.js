// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3 | Calculate Area", () => {
    describe("Function - calculateArea", () => {
       // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
        expect(calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
        expect(calculateArea.length).toBe(2);
        })    

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
        expect(calculateArea(4,5)).toEqual(20);
        expect(calculateArea(11,8)).toEqual(88);
        expect(calculateArea(15,4)).toEqual(60);
        })

        it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(8)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 15)).toEqual(undefined);
        });
    })    
})