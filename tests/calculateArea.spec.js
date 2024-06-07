

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(5, 4)).toEqual(20);
            expect(calculateArea(10, 4)).toEqual(40);
        });
        it("should return undefine if any of the arguments is not provided", () => {
            expect(calculateArea(3)).toEqual(undefined);
            expect(calculateArea(undefined)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        });
        it("if any of the two arguments is not a number", () =>{
            expect(calculateArea("4", 3)).toEqual(undefined);
            expect(calculateArea(3, "20")).toEqual(undefined);
            expect(calculateArea("30", "294")).toEqual(undefined);
        })
    })    
})

