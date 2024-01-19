// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("The function should be defined.", () => {
            expect(divide).toBeDefined(); 
          });

        it("The function should take two numbers as arguments.", () => {
            expect(divide.length).toBe(2)
          });
        
        it("The function should return the division of the two numbers.", () => {
            expect(divide(2, 2)).toEqual(1);
            expect(divide(9, 3)).toEqual(3);
            expect(divide(100, 5)).toEqual(20);  
          });
          
        
        it("The function should return undefined if any of the arguments is not provided.", () => {
            expect(divide(1,"1")).toEqual(undefined);
            expect(divide("1", 1)).toEqual(undefined);
            expect(divide("1", "1")).toEqual(undefined);  
          });

        });
    });

        






