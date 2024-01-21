describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    it("should be defined", () => {
      expect(printFullName).toBeDefined();
    });

    it("should take one argument of type object. This object should have two properties: firstName and lastName.", () => {
      expect(printFullName.length).toBe(1);
    });

    it("should return a string with first and last name separated by a space", () => {
      expect(printFullName({ firstName: "Joy", lastName: "Huang" })).toEqual(
        "Joy Huang"
      );
      expect(printFullName({ firstName: "Omar", lastName: "Lee" })).toEqual(
        "Omar Lee"
      );
    });
    it("should return undefined if the argument passed is not an object", () => {
      expect(printFullName("Joy Huang")).toEqual(undefined);
      expect(printFullName(123)).toEqual(undefined);
      expect(printFullName(true)).toEqual(undefined);
    });
    it("should return undefined if firstName or lastName fields are missing!", () => {
      expect(printFullName({})).toEqual(undefined);
      expect(printFullName({ firstName: "Joy" })).toEqual(undefined);
      expect(printFullName({ lastName: "Ana" })).toEqual(undefined);
      expect(printFullName(true)).toEqual(undefined);
    });
    it("should return undefined if firstName or lastName are not strings", () => {
      expect(printFullName({ firstName: 123, lastName: "Huang" })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: "Ana", lastName: 123 })).toEqual(
        undefined
      );
      expect(printFullName({ firstName: 123, lastName: 456 })).toEqual(
        undefined
      );
    });
  });
});
