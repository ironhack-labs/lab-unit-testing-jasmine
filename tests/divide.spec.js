// UNCOMMENT THE CODE BELOW TO START

    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two arguments", () => {
             expect(divide.length).toBe(2);
        });
        it("should return the division of the two numbers",() => {
           expect( divide(1,2)).toEqual(0.5);
           expect( divide(30,10)).toEqual(3);
           expect( divide(100,50)).toEqual(2);
        });

        it("should return undefined if any of the arguments is not provided",() =>{
         
         expect(divide(200)).toEqual(undefined);
         expect(divide()).toEqual(undefined);
         expect(divide(undefined,5)).toEqual(undefined);

        });

        it("should return undefinde if any of the arguments is not a number", ()=>{
            expect( divide(38,"6")).toEqual(undefined);
            expect( divide("pki",4)).toEqual(undefined);
            expect( divide("10","2")).toEqual(undefined);

        });
    }); 