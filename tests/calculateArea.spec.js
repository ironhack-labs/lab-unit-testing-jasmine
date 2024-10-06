describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
    
        });

        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(6, 3)).toBe(18);
            expect(calculateArea(10, 2)).toBe(20);
            expect(calculateArea(5, 2)).toBe(10);
            expect(calculateArea(2, 1)).toBe(2);        
        }); 

        it("should return `undefined` if any of the arguments is not provided or any number is negative", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);  
            expect(calculateArea(-3, 4)).toEqual(undefined);                    
            expect(calculateArea(3, -4)).toEqual(undefined);  
            expect(calculateArea(-3, -4)).toEqual(undefined);
        }); 

    })    
})