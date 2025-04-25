// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:

        it("should be defined", () => {
            expect(add).toBeDefined();
          });
      
         
          it("should return the division of the two numbers", () => {
            expect(add(1, 2)).toEqual(3);
            expect(add(3, 4)).toEqual(7);
            expect(add(100, 47)).toEqual(147);
          });
      
          it("should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);
          });
    
           it ("should return undefined if any of the two arguments is not a number", () => {
            expect(add(1, "anything")).toEqual(undefined);
            expect(add("anything", 1)).toEqual(undefined);
            expect(add("anything", "anything")).toEqual(undefined);
        });
    
        });
      });

        
/*         it("", () => {});

    })    
})

 */