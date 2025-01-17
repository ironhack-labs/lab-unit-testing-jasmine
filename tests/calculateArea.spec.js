// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3 | calculateArea", () => {
    describe("Function - calculateArea", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        }),

            it("should return a number representing the area of a rectangle", () => {
                expect(calculateArea(25, 30)).toEqual(Math.round(750));
                expect(calculateArea(14.5, 12.3)).toEqual(Math.round(178));
                expect(calculateArea(20.3, 16.8)).toEqual(Math.round(341));
            })

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        }),

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        }),
        // For refractor
        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea( "12" , 1)).toEqual(undefined);
            expect(calculateArea( 7 , "cat")).toEqual(undefined);
          });
        });
    });