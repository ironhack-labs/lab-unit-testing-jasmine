// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });
        
        it("should take one argument", () => {
            expect(printFullName.length).toBe(1);
        })

        it("should return undefined if the argument passed is not an object", () => {
            expect(printFullName("Piyush Bisht")).toEqual(undefined);
            expect(printFullName(123)).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined);
        })

        it("should return undefined if firstName or lastName fields are missing", () => {
            expect(printFullName({firstName: "piyush"})).toEqual(undefined);
            expect(printFullName({lastName: "bisht"})).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
          });

          it("should return undefined if firstName or lastName are not a string", () => {
            expect(printFullName({firstName: 1234, lastName: "bisht"})).toEqual(undefined)
            expect(printFullName({firstName: "piyush", lastName: 1234})).toEqual(undefined)
            expect(printFullName({firstName: 1234, lastName: 1})).toEqual(undefined)
          })

          it("should return a string with first and last nama separated by a space", () => {
            expect(printFullName({firstName: "piyush", lastName: "bisht"})).toEqual("piyush bisht")
            expect(printFullName({firstName: "mahima", lastName: "pandey"})).toEqual("mahima pandey")
          })
     
})

})