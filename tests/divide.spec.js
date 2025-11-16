// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined()
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2)
        });

        it("should return the division of the two numbers", () => {
            expect(divide (2, 4)).toEqual(0.5);
            expect(divide (3, 4)).toEqual(0.75);
            expect(divide (500, 250)).toEqual(2);
        });

          it("should return undefined if any of the arguments is not defined", () => {
            expect(divide (2)).toEqual(undefined);
            expect(divide ()).toEqual(undefined);
            expect(divide (undefined, 250)).toEqual(undefined);
        });


        

    })    
})

