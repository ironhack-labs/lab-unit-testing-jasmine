// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
          });
        it("should take one argument", () => {
            expect(printFullName.length).toBe(1);
          });
        it("should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({firstName: 'Jay', lastName: 'Joe'})).toEqual('Jay Joe');
            expect(printFullName({firstName: 'Maria', lastName: 'Carmen'})).toEqual('Maria Carmen');
            
          });
        it ("should return undefined if the argument passed is not an object", () => {
            expect(printFullName("")).toEqual(undefined);
            expect(printFullName(false) ).toEqual(undefined);
            expect(printFullName(145)).toEqual(undefined);
          });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(printFullName({firstName: 'Jay'})).toEqual(undefined);
            expect(printFullName({lastName: 'Carmen'})).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
            });
        it("should return undifined if firstName and lastName are not strings", () => {
                expect(printFullName({firstName: 'Jay', lastName: 123})).toEqual(undefined);
                expect(printFullName({firstName: 123, lastName: 'Carmen'})).toEqual(undefined);
                expect(printFullName({firstName: 123, lastName: 321})).toEqual(undefined);
                
            });

    })    
})

