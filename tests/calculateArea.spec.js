
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it ("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        
        it ("should retun undefined if any of the arguments is not provided",() => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined); 
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it ("should take two numbers as arguments",() => {
            expect(calculateArea("1",2)).toEqual(undefined); 
            expect(calculateArea(1,"2")).toEqual(undefined); 
            expect(calculateArea("1","2")).toEqual(undefined); 
        })

        it ("should return a number representing the area of a rectangle (the product of the two arguments).",() => {
            expect(calculateArea(8,4)).toEqual(32); 
            expect(calculateArea(10,2)).toEqual(20);
            expect(calculateArea(33,11)).toEqual(363); 
        })

    });  
});

