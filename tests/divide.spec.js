// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it( "should take two arguments",() => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of two values", () => {
            expect(divide(4,2)).toEqual(2);
            
        }

        );

        it("should return undefined if any of number is undefined",()=>{
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined,1)).toEqual(undefined);
            
        }

        );

        it("should return undefined if the arguments are not number" ,() =>{
            expect(divide(" ")).toEqual(undefined);
        }
        );



    }) 
})

