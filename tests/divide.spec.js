// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two arguments", () => {
            expect(divide.length).toEqual(2);
        });
        it("should return the division of the two numbers", () => {
            expect(divide(6, 3)).toEqual(2);
            
        });
        
    
    });

    })    



// Here are the requirements for the divide function:

// The function should be defined.
// The function should take two numbers as arguments.
// The function should return the division of the two numbers.
// The function should return undefined if any of the arguments is not provided