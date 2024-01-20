// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("Should be defined", () => {
      expect(printFullName).toBeDefined();
    });

    it("Should take one argument", () => {
      expect(printFullName.length).toBe(1);
    });

    it("Should return a string with frist and last name separated by a space", () => {
      expect(printFullName({ firstName: "John", lastName: "Walker" })).toEqual(
        "John Walker"
      );
      expect(printFullName({ firstName: "Diva", lastName: "Virtual" })).toEqual(
        "Diva Virtual"
      );
      expect(printFullName({ firstName: "Pia", lastName: "Zola" })).toEqual(
        "Pia Zola"
      );
    });

    it("Should return undefined if the argument passed is not an object", () => {
      expect(printFullName("John Walker")).toEqual(undefined);
      expect(printFullName(true)).toEqual(undefined);
      expect(printFullName(54)).toEqual(undefined);
    });

    it("Should return undefined if one of the arguments is missing", () => {
      expect(printFullName({ firstName: "John" })).toEqual(undefined);
      expect(printFullName({ lastName: "Walker" })).toEqual(undefined);
      expect(printFullName({})).toEqual(undefined);
    });

    it("Should return undefined if firstName or lastName are not strings", () => {
      expect(printFullName({ firstName: "John", lastName: 34 })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: 0, lastName: "Walker" })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: "John", lastName: 1 })).toEqual(
        undefined
      );
    });
  });
});
