describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined.", () => {
            expect(divide).toBeDefined(2);
        });

        it("should take two numbers as arguments.", () => {
            //expect(add.length).toBe(2)
            //expect(add(1,"a")).toEqual(undefined);
            expect(divide(1,2)).toBe(1,2);
            expect(divide(1,"a")).toEqual(undefined);

        });

        it("should return the division of the two numbers.", () => {
            expect(divide(10,5).toEqual(2))
            expect(divide(10,0).toEqual(undefined))
            expect(divide(10,100).toEqual(0.1))
        });
            

        it("should return undefined if any of the arguments is not provided.", () => {});
            expect(divide(10)).toEqual(undefined)
            expect(divide(5,"")).toEqual(undefined)
            expect(divide("",5)).toEqual(undefined)

    })    
})




/* 
The function should be defined.
The function should take two numbers as arguments.
The function should return the division of the two numbers.
The function should return undefined if any of the arguments is not provided

*/