// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2)
            expect(calculateArea(1, "1")).toEqual(undefined)
            expect(calculateArea("1", 1)).toEqual(undefined)
            expect(calculateArea("1","1")).toEqual(undefined)
        });
        it("should return a number representing the area of a rectangle (the product of the two arguments", () => {
            expect(calculateArea(4,2)).toEqual(8)
            expect(calculateArea(1,1)).toEqual(1)
            expect(calculateArea(100,2)).toEqual(200)
        });
        it("In case any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea()).toEqual(undefined)
            expect(calculateArea(1)).toEqual(undefined)
            expect(calculateArea(1, undefined)).toEqual(undefined)
        });  
    })    
})
