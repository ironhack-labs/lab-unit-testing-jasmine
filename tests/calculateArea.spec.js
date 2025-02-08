// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });    
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        }); 
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        }); 
        it("Debe devolver el área de los dos números (multiplicación)", () => {
            expect(calculateArea(5,4)).toBe(20);
            expect(calculateArea(7,5)).toBe(35);
            expect(calculateArea(90,1)).toBe(90);
            expect(calculateArea(2,2)).toBe(4);

        })    
        it("Devuelve undefined si alguno de los dos argumentos no es un número", () => {
            expect(calculateArea("word",2)).toEqual(undefined);
            expect(calculateArea(50,"word")).toEqual(undefined);
            expect(calculateArea(true,"word")).toEqual(undefined);
            expect(calculateArea("word",[2,3,4])).toEqual(undefined);
        });
    })

})
