// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("function should be defined", function() {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("function should take one argument", function (){
            expect(sumArrayNumbers.length).toBe(1);
        })

        it("should return the sum of all numbers in the array", function() {
            expect(sumArrayNumbers([1,2,3,4])).toEqual(10);
            expect(sumArrayNumbers([1,1,1,1,1])).toEqual(5);
            expect(sumArrayNumbers([10,10,10])).toEqual(30);
        });

        it("should return undefined if the argument it's not an array", function() {
            expect(sumArrayNumbers("1234")).toEqual(undefined);
            expect(sumArrayNumbers(1,2,3,4)).toEqual(undefined)
        });

        it("should return 0 if the argument passed is an emoty array", function() {
            expect(sumArrayNumbers([])).toEqual(0);
        });



    })    
})

