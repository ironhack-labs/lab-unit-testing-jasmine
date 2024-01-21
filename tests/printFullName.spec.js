// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    it("should be defined", () => {
      expect(printFullName).toBeDefined();
    });

    it("should take one argument - an object", () => {
      expect(printFullName.length).toBe(1);
    });

    it("should return a string with the first name and the last name separated by a space", () => {
      expect(printFullName({ firstName: "John", lastName: "Smith" })).toEqual(
        "John Smith"
      );
      expect(printFullName({ firstName: "Ana", lastName: "Ross" })).toEqual(
        "Ana Ross"
      );
    });

    it("should return undefined if firstName or lastName properties are not provided", () => {
      expect(printFullName({ firstName: "John" })).toEqual(undefined);
      expect(printFullName({ lastName: "Smith" })).toEqual(undefined);
      expect(printFullName({})).toEqual(undefined);
    });
    it("should return undefined if the argument is not an object", () => {
      expect(printFullName("John")).toEqual(undefined);
      expect(printFullName(45)).toEqual(undefined);
      expect(printFullName([])).toEqual(undefined);
    });
  });
});
