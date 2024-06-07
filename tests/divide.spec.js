
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(12, 3)).toEqual(4);
            expect(divide(9, 3)).toEqual(3);
            expect(divide(1, 1)).toEqual(1);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide()).toEqual(undefined);
            expect(divide("4")).toEqual(undefined);
            expect(divide(undefined)).toEqual(undefined);
            expect(divide(NaN)).toEqual(undefined);
        });

        it("if any of the two arguments is not a number", () =>{
            expect(divide("4", 3)).toEqual(undefined);
            expect(divide(3, "20")).toEqual(undefined);
            expect(divide("30", "294")).toEqual(undefined);
        })
    })    
})

/*
Here are the requirements for the divide function:

The function should be defined.
The function should take two numbers as arguments.
The function should return the division of the two numbers.
The function should return undefined if any of the arguments is not provided

*/