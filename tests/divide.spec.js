

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide(1,2)).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide()).toBeDefined;
        })

        it("should return division of two numbers", () => {
            expect(divide(10,2)).toBe(5);
            expect(divide(3,3)).toBe(1);
            expect(divide(52,100)).toBe(0.52);
        })

        it("should return undefined if any arguments are not provided", () => {
            expect(divide(62323)).toBeUndefined;
            expect(divide()).toBeUndefined;
            expect(divide(62323,32313,323132)).toBeUndefined;
            
        })

        it("should return undefined when arguments are not numbers", () => {
            expect(divide("A",10)).toEqual(undefined);
            expect(divide("A","B")).toEqual(undefined);
            expect(divide(1,"C")).toEqual(undefined);
        });
    })    
})
