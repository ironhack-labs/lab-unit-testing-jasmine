// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Function printFullName", () => {

      it("should be defined", () => {
        expect(printFullName).toBeDefined();
      });
  
      it("should take one  arguments", () => {
        expect(printFullName.length).toBe(1);
      });
  
      it(" should return a string with first and last name separated by a space", () => {
        expect(printFullName({firstName: "Felipe", lastName: "Bedoya" }) ).toEqual("Felipe Bedoya");
        expect(printFullName({firstName: "Meritxell", lastName: "Avila" }) ).toEqual("Meritxell Avila");
      });
  
      it("should return undefined  is the arguments passed is not a object", () => {
        expect(printFullName("Maria Rosa")).toEqual(undefined);
        expect(printFullName(234)).toEqual(undefined);
        expect(printFullName( false)).toEqual(undefined);
      });

        it("should return undefined if firstName or lastName fields are missing", () => {
        expect(printFullName({firstName: "Maria"} )).toEqual (undefined);
        expect(printFullName({firstName: "Rosa"} )).toEqual (undefined);
        expect(printFullName({} )).toEqual (undefined);
     })
    });

  