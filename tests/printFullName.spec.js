// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(printFullName).toBeDefined();
    });
    it("takes one argument", () => {
      expect(printFullName.length).toBe(1);
    });
    it("should return firstName and lastName name as a string seperated by space", () => {
      expect(printFullName({ firstName: "pou", lastName: "guru" })).toEqual(
        "pou guru"
      );
      expect(printFullName({ firstName: "Ali", lastName: "reza" })).toEqual(
        "Ali reza"
      );
    });
    it("should return undefined if passed argument is not an object", () => {
      expect(printFullName("pou guru")).toEqual(undefined);
      expect(printFullName(1)).toEqual(undefined);
      expect(printFullName(true)).toEqual(undefined);
    });
    it("should return undefined if either Arguments are missing", () => {
      expect(printFullName({})).toEqual(undefined);
      expect(printFullName({ firstName: "pou" })).toEqual(undefined);
      expect(printFullName({ lastName: "guru" })).toEqual(undefined);
    });
    it("should return undefined if either outcomes are not a string", () => {
      expect(printFullName({ firstName: 1, lastName: "guru" })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: "pou", lastName: 2 })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: 3, lastName: 4 })).toEqual(undefined);
    });
  });
});
