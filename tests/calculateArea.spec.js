// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 3 | calculateArea", () => {
    describe("Function calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("Should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(2, 2)).toEqual(4);
            expect(calculateArea(10, 2)).toEqual(20);
            expect(calculateArea(100, 2)).toEqual(200);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        // it("Should return undefined if any of the arguments is not provided", () => {
        //     expect(add(1, "hola")).toEqual(undefined);
        //     expect(add(false, 4)).toEqual(undefined);
        //     expect(add("w", "er")).toEqual(undefined);
        // });


    });
})
