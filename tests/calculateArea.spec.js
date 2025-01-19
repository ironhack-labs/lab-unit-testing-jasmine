// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should takes two arguments",()=>{
           expect(calculateArea.length).toBe(2);
        });
        it("should return the rectangle area by multiblying the two numbers",() =>{
         expect( calculateArea(2,3)).toEqual(6);
         expect( calculateArea(2,100)).toEqual(200);
         expect( calculateArea(2,1)).toEqual(2);
        });
        it("should return undefined if any of the arguments is not provide",() =>{
         expect( calculateArea()).toEqual(undefined);
         expect( calculateArea(2,)).toEqual(undefined);
         expect( calculateArea(100,undefined)).toEqual(undefined);
        });
        if("should return undefined if any of the arguments is not a number",() =>{
            expect( calculateArea("2",3)).toEqual(undefined);
            expect( calculateArea("2",3)).toEqual(undefined);
            expect( calculateArea("1","3")).toEqual(undefined);

        });

        });

    });  