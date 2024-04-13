// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 3 | Getting Started", () => {
    describe("Function calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        })

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2)
        })

        it("should return the multiplication of the two numbers", () => {
            expect(calculateArea(2, 2)).toEqual(4)
            expect(calculateArea(4, 2)).toEqual(8)
            expect(calculateArea(100, 10)).toEqual(1000)
        })

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined)
            expect(calculateArea()).toEqual(undefined)
            expect(calculateArea(undefined, 1)).toEqual(undefined)
        })
    })
})
