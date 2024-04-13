// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 2 | Funtion divide", () => {
    describe("Function divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("Should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers.", () => {
            expect(divide(8, 2)).toEqual(4);
            expect(divide(10, 2)).toEqual(5);
            expect(divide(100, 5)).toEqual(20);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        // it("Should return undefined if any of the arguments is not provided", () => {
        //     expect(add(1, "hola")).toEqual(undefined);
        //     expect(add(false, 4)).toEqual(undefined);
        //     expect(add("w", "er")).toEqual(undefined);
        // });


    });
});