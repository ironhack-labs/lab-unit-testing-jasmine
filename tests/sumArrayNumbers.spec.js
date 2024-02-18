// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("should take one argument", () => {
            expect(sumArrayNumbers.length).toBe(1);
        });

        it("should take one argument of type array containing numbers", () => {
         expect(sumArrayNumbers([1, 2, 3]) ).toEqual(6);
        });

        it("in the case it is not an array return undefined", () => {
            expect( sumArrayNumbers(123) ).toEqual(undefined);
            expect( sumArrayNumbers("1") ).toEqual(undefined);
            expect( sumArrayNumbers({ })).toEqual(undefined);
        });

        it("should return 0 if the argument passed is an empty array", () => {
            expect ( sumArrayNumbers([]) ).toEqual(0);
        });
    })   
    
function sumArrayNumbers(arr) {
    if (!Array.isArray(arr)) {
        return undefined;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum; 
} 
})
