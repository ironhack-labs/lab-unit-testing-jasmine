// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3 | Calculate Area", () => {
  describe("Function calculateArea", () => {
    it("The function should be defined.", () => {
      expect( typeof divide).toBe("function");
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toEqual (2);
    });
  });

  it("should return undefined if any of the arguments is not provided", () => {
    expect(calculateArea()).toEqual(undefined);
  });
});
