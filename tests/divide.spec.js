// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("La función debe estar definida", () => {
            expect(divide).toBeDefined();
        });
        it("La función debe tener dos argumentos", () => {
            expect(divide.length).toBe(2);
        });
        it("La función debe devolver la división de los dos números", () => {
            expect(divide(4,2)).toBe(2);
            expect(divide(20,10)).toBe(2);
            expect(divide(48,6)).toBe(8);
            expect(divide(74,5)).toBe(14.8);
            expect(divide(100,20)).toBe(5);
        });
        it("La función debe devolver undefinied si alguno de los dos argumentos no está", () => {
            expect(divide(2)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined,1)).toEqual(undefined);
        });
        it("Devuelve undefined si alguno de los dos argumentos no es un número", () => {
            expect(divide("word",2)).toEqual(undefined);
            expect(divide(50,"word")).toEqual(undefined);
            expect(divide(true,"word")).toEqual(undefined);
            expect(divide("word",[2,3,4])).toEqual(undefined);
        });
});

})
