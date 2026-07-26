describe("Iteration 2 | Function divide", () => {
  it("should be defined", () => {
    expect(divide).toBeDefined();
  });

  it("should take two arguments", () => {
    expect(divide.length).toBe(2);
  });

  it("should return the division of the two numbers", () => {
    expect(divide(6, 2)).toEqual(3);
    expect(divide(20, 4)).toEqual(5);
    expect(divide(100, 5)).toEqual(20);
  });

  it("should return undefined if any of the arguments is not provided", () => {
    expect(divide(5)).toEqual(undefined);
    expect(divide()).toEqual(undefined);
    expect(divide(undefined, 2)).toEqual(undefined);
  });
});