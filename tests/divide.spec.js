describe("Function divide", () => {
  it("should be defined", () => {
    expect(divide).toBeDefined();
  });

  it("should take two arguments", () => {
    expect(divide.length).toBe(2);
  });

  it("should return the division of the two numbers", () => {
    expect(divide(10, 2)).toEqual(5);
    expect(divide(15, 3)).toEqual(5);
    expect(divide(100, 4)).toEqual(25);
  });

  it("should return undefined if any of the arguments is not provided", () => {
    expect(divide(10)).toEqual(undefined);
    expect(divide()).toEqual(undefined);
    expect(divide(undefined, 5)).toEqual(undefined);
  });

  // Additional edge case (preguntar)
  it("should return undefined if dividing by zero", () => {
    expect(divide(10, 0)).toEqual(undefined);
  });
});
