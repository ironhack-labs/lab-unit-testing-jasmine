// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(add).toBeDefined();
          });
      
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(100,20)).toEqual(5);
            expect(divide(40,4)).toEqual(10);
            expect(divide(60,3)).toEqual(20);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(100)).toEqual(undefined);
            expect(divide(null)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        }); 

        it ("should return undefined if any of the arguments is not a number", () => {
            expect( add(57, "Hello") ).toEqual(undefined);
            expect( add("2", 4) ).toEqual(undefined);
            expect( add("Bye", 100) ).toEqual(undefined);
          });
        });
      });
