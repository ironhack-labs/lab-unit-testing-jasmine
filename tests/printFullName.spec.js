describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    it("should be defined", () => {
      expect(printFullName).toBeDefined();
    });

    it("should take one argument", () => {
      expect(printFullName.length).toBe(1);
    });

    it("should return a string consist fullname with space in between", () => {
      expect(printFullName({ first: "Marie", last: "Curie" })).toEqual(
        "Marie Curie"
      );
      expect(printFullName({ first: "Ada", last: "Lovelace" })).toEqual(
        "Ada Lovelace"
      );
      expect(printFullName({ first: "Robert", last: "Oppenheimer" })).toEqual(
        "Robert Oppenheimer"
      );
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(printFullName({ first: "Robert" })).toEqual(undefined);
      expect(printFullName({ last: "Curie" })).toEqual(undefined);
      expect(printFullName({ first: undefined, last: "Lovelace" })).toEqual(
        undefined
      );
    });

    it("should return undefined if any of the arguments is not an object", () => {
      expect(printFullName(1)).toEqual(undefined);
      expect(printFullName("a")).toEqual(undefined);
      expect(printFullName("a", "b")).toEqual(undefined);
    });
  });
});
