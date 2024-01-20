// UNCOMMENT THE CODE BELOW TO START



describe("Function divide", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two numbers as argument", () =>{
            expect(divide.length).toBe(2);
            
        });
        it("should return the division of the two numbers", () =>{
            expect(divide(4, 2)).toEqual(2);
            expect(divide(10, 5)).toEqual(2);
            expect(divide(6, 2)).toEqual(3);

        });
        it ("The function should return undefined if any of the arguments is not provided", () =>{
            expect(divide(2)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        

    })  ;  
});

/* 

The function should return the division of the two numbers.
The function should return undefined if any of the arguments is not provided
*/