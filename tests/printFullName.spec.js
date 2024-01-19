// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined.", () => {
      expect(printFullName).toBeDefined();
    });

    it("The function should take one argument of type object. The object should have two properties: firstName and lastName.", () => {
      expect(printFullName.length).toBe(1);
    });

    it("The function should return a string with the first name and the last name separated by a space", () => {
      expect(printFullName({ firstName: "Masha", lastName: "Smit" })).toEqual(
        "Masha Smit"
      );
      expect(printFullName({ firstName: "Dima", lastName: "Shakh" })).toEqual(
        "Dima Shakh"
      );
      expect(printFullName({ firstName: "Iron", lastName: "Hack" })).toEqual(
        "Iron Hack"
      );
    });

    it("The function should return undefined if any of the arguments is not provided", () => {
      expect(printFullName({ firstName: undefined, lastName: "Smit" })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: "Dima", lastName: undefined })).toEqual(
        undefined
      );
      expect(
        printFullName({ firstName: undefined, lastName: undefined })
      ).toEqual(undefined);
    });
  });
});
