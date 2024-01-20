// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName.length).toBeDefined();
        });

        it("should take one argument of type object. The object should have two properties: firstName and lastName", () => {
            expect(printFullName.length).toBe(1);
          });
      
          it(" should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({firstName: "Mel", lastName: "Schiffner"}) ).toEqual("Mel Schiffner");
            expect(printFullName({firstName: "Jared", lastName: "Leto"}) ).toEqual("Jared Leto");
          });
      
          it("should return undefined if the argument passed is not an object", () => {
            expect(printFullName(123)).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined);
            expect(printFullName(undefined)).toEqual(undefined);
          });

          it("should return undefined if the firstName or lastName are not provided", () => {
            expect(printFullName({firstName: "Mel"})).toEqual(undefined);
            expect(printFullName({lastName: "Schiffner"})).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
          });

    })    
})

