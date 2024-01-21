// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 4", () => {
    describe("Function printFullName", () => {
      it("should be defined", () => {
        expect(printFullName).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(printFullName.length).toBe(2);
      });
  
      it("should return a string with the first name and the last name separated by a space.", () => {
        expect(printFullName({FirstName: "Jennifer", lastName: "Aniston"})).toEqual("Jennifer Aniston");
        expect(printFullName({FirstName: "Rachel", lastName: "Green"})).toEqual("Rachel Green");
      });
  
      it("should return undefined if the argument passed is not a object", () => {
        expect(printFullName("Rachel Green")).toEqual(undefined);
        expect(printFullName(123)).toEqual(undefined);
        expect(printFullName(true)).toEqual(undefined);
      });

       it("should return undefined if firstName or lastName fields are missing", () => {
        expect(printFullName({firstName: "Rachel"})).toEqual(undefined);
        expect(printFullName({lastName: "Green"})).toEqual(undefined);
        expect(printFullName({})).toEqual(undefined);
      });

       it("should return undefined if firstName or lastName are not strings", () => {
        expect(printFullName({firstName: 123, lastName: "Green"})).toEqual(undefined);
        expect(printFullName({firstName: "Rachel", lastName: 123})).toEqual(undefined);
        expect(printFullName({firstName: 123, lastName: 123})).toEqual(undefined);
      });
    });
  });