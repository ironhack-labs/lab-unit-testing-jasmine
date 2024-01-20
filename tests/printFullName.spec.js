// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("The function should take one argument",()=>{
            expect(printFullName.length).toBe(1);
        })
        it("The function should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({firstName: 'filipe',lastName: 'teixeira'})).toBe('filipe teixeira');
            expect(printFullName({firstName: 'rafael',lastName: 'cardoso'})).toBe('rafael cardoso');
        });
        it("The function should return undefined if the argument passed is not an object.",()=>{
            expect(printFullName(4)).toBeUndefined();
            expect(printFullName('filipe')).toBeUndefined();
            expect(printFullName(true)).toBeUndefined();
        })
        it("The function should return undefined if either the firstName or lastName fields are missing.",()=>{
            expect(printFullName({firstName:'filipe'})).toBeUndefined();
            expect(printFullName({lastName: 'teixeira'})).toBeUndefined();
            expect(printFullName({})).toBeUndefined();
        })
    })    
})
