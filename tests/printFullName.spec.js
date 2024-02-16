// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4 ", () => {
  describe("Function printFullName", () => {
    it("should be defined", () => {
      expect(printFullName).toBeDefined();
    });

    it("should return a string with the first name and the last name separated by a space", () => {
      expect(
        printFullName({ firstName: "shaza", lastName: "kashlan" })
      ).toEqual("shaza kashlan");
      expect(printFullName({ firstName: "khaled", lastName: "choqo" })).toEqual(
        "khaled choqo"
      );
    });

    it("should return undefined if the argument passed is not an object", () => {
      expect(printFullName("shaza kashlan")).toEqual(undefined);
      expect(printFullName(123)).toEqual(undefined);
      expect(printFullName(true)).toEqual(undefined);
    });

    it("should return undefined if firstName or lastName properties are not provided", function () {
      expect(printFullName({ firstName: "shaza" })).toBeUndefined();
      expect(printFullName({ lastName: "kashlan" })).toBeUndefined();
      expect(printFullName({})).toBeUndefined();
    });
  });
});
