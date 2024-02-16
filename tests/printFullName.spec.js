// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    it("should be defined", () => {
      expect(printFullName).toBeDefined();
    });

    it("should return the full name when given a valid object with firstName and lastName properties", () => {
      const fullName = printFullName({ firstName: "John", lastName: "Doe" });
      expect(fullName).toBe("John Doe");
    });

    it("should return undefined when given an argument that is not an object", () => {
      const fullName = printFullName("John Doe");
      expect(fullName).toBeUndefined();
    });

    it("should return undefined when the firstName property is not provided", () => {
      const fullName = printFullName({ lastName: "Doe" });
      expect(fullName).toBeUndefined();
    });

    it("should return undefined when the lastName property is not provided", () => {
      const fullName = printFullName({ firstName: "John" });
      expect(fullName).toBeUndefined();
    });
  });
});
