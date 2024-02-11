// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    it("function should be defined", () => {
      expect(printFullName).toBeDefined();
    });

    it("should take one arguments", () => {
      expect(printFullName.length).toBe(1);
    });

    it("should return a string with the first name and last name seperated by a space", () => {
      expect(printFullName({ firstName: "John", lastName: "Doe" })).toEqual(
        "John Doe"
      );
    });

    it("should return undefined if argument passed is not an object", () => {
      expect(printFullName("string")).toEqual(undefined);
      expect(printFullName(1)).toEqual(undefined);
      expect(printFullName([])).toEqual(undefined);
      expect(printFullName(true)).toEqual(undefined);
    });

    it("should return undefined if first name or last name is not provided", () => {
      expect(printFullName({ firstName: "John" })).toEqual(undefined);
      expect(printFullName({ lastName: "Doe" })).toEqual(undefined);
      expect(printFullName({})).toEqual(undefined);
    });

    it("should return undefined if the first name or last name is not a string", () => {
      expect(printFullName({ firstName: 1234, lastName: "Doe" })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: "John", lastName: 1234 })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: 1234, lastName: 6578 })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: true, lastName: false })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: false, lastName: true })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: [], lastName: {} })).toEqual(undefined);
      expect(printFullName({ firstName: {}, lastName: [] })).toEqual(undefined);
    });
  });
});
