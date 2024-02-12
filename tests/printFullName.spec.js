// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
       it("should be defined", () => {
            expect(printFullName).toBeDefined();
          });
      
          it("should take one argument", () => {
            expect(printFullName.length).toBe(1);
          });

          it("should return a string with words separate by a space", () => {
            expect(printFullName({firstName:"Gabriela", lastName:"Silva"})).toEqual("Gabriela Silva");
          });

          it("should return undefined if any of the arguments is not provided", () => {
            expect(printFullName({})).toEqual(undefined);
            expect(printFullName({firstName: "", lastName: "Silva"})).toEqual(undefined);
            expect(printFullName({firstName: "Gabriela", lastName: ""})).toEqual(undefined);
          });

          it("should return undefined if is not an object", () => {
            expect(printFullName(123)).toEqual(undefined);
            expect(printFullName("Gabriela Silva")).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined);
          });
    })    

})
