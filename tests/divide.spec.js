// UNCOMMENT THE CODE BELOW TO START


    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the quotient of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(6, 3)).toEqual(2);
            expect(divide(100, 10)).toEqual(10);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(1, '2')).toEqual(undefined);
            expect(divide('3', 4)).toEqual(undefined);
            expect(divide('5', '6')).toEqual(undefined);
        });

    })    

