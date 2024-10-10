

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it ("should be defined", () => {
            expect(divide).toBeDefined();
        });
        
        it ("should retun undefined if any of the arguments is not provided",() => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined); 
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it ("should take two numbers as arguments",() => {
            expect(divide("1",2)).toEqual(undefined); 
            expect(divide(1,"2")).toEqual(undefined); 
            expect(divide("1","2")).toEqual(undefined); 
        })

        it ("should return the division of two numbers",() => {
            expect(divide(8,4)).toEqual(2); 
            expect(divide(10,2)).toEqual(5);
            expect(divide(33,3)).toEqual(11); 
        })

    });    
});

