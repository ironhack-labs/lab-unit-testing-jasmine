// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(printFullName).toBeDefined();
    });
    it("should take one argument of Type: object", () => {
      expect(printFullName.length).toBe(1);
    });
    it("should have two properties: firstName and lastName", () => {
      expect(printFullName({ firstName: "Antonio", lastName: "Jaja" })).toEqual(
        "Antonio Jaja"
      );
    });
    it("should return undefined if argument passed is not an object", () => {
      expect(printFullName("AntonioJaja")).toEqual(undefined);
      expect(printFullName(123)).toEqual(undefined);
      expect(printFullName(false)).toEqual(undefined);
    });
    it("should return undefined in case firstName or lastName not provided", () => {
      expect(printFullName({ firstName: 999, lastName: "Jaja" })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: "Antonio", lastName: 999 })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: 999, lastName: 999 })).toEqual(
        undefined
      );
    });
  });
});
