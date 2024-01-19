// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined()
        });
        it("should take one argument of type object", () => {
        expect(printFullName.length).toBe(1);
      });
      it("should return return a string with the first name and the last name separated by a space", () => {
        expect(printFullName({firstName: "First", lastName: "Last"})).toEqual("First Last");
      });
      it("should return undefined if the argument passed is not an object", () => {
        expect(printFullName(1)).toEqual(undefined);
        expect(printFullName("str")).toEqual(undefined);
        expect(printFullName(true)).toEqual(undefined);
      });
      it("should return undefined if the firstName or lastName properties are not provided", () => {
        expect(printFullName({firstName: "First"})).toEqual(undefined);
        expect(printFullName({lastName: "Last"})).toEqual(undefined);
        expect(printFullName({})).toEqual(undefined);
      });
    })    
})
