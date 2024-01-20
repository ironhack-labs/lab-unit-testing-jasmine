// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
          });

        it("should take one argument of type object. The object should have two properties: firstName and lastName.", () => {
            expect(printFullName.length).toBe(1);

            expect(typeof fullNames).toEqual('object');

            expect(Object.keys(fullNames).length).toBe(2);
            expect(Object.keys(fullNames).toContain('firstName'));
            expect(Object.keys(fullNames).toContain('lastName'));
        });  

        it("should return a string with the first name and the last name separated by a space.", () => {
            const message = printFullName({
                firstName: 'Simona',
                lastName: 'Wurst' 
            })
            expect(message).toEqual('Simona Wurst');
        });  

        it("In case the argument passed is not an object, the function should return undefined", () => {
            expect(printFullName(1)).toEqual(undefined);
            expect(printFullName()).toEqual(undefined);
            expect(printFullName(undefined, 1)).toEqual(undefined);
          });

        it("In case the firstName or lastName properties are not provided, the function should return undefined.", () => {
            expect(Object.keys(fullNames)).toBe();
        }); 
    })    
})

