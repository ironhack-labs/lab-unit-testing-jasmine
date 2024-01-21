// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it('should be defined', () => {
            expect(printFullName).toBeDefined();
          });
        
          it('should take one argument', () => {
            expect(printFullName.length).toBe(1);
          });
        
          it('should return a string with the first name and last name separated by a space', () => {
            expect(printFullName({ firstName: 'John', lastName: 'Doe' })).toEqual('John Doe');
            expect(printFullName({ firstName: 'Jane', lastName: 'Smith' })).toEqual('Jane Smith');
          });
        
          it('should return undefined if the argument is not an object', () => {
            expect(printFullName('John Doe')).toEqual(undefined);
          });
        
          it('should return undefined if the firstName or lastName properties are not provided', () => {
            expect(printFullName({ firstName: 'John' })).toEqual(undefined);
            expect(printFullName({ lastName: 'Doe' })).toEqual(undefined);
          });

    })    
})

