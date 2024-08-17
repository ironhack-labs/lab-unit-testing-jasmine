describe("Function divide", () => {
  it("should be defined", () => {
    expect(divide).toBeDefined();
  });

  it("should take two arguments", () => {
    expect(divide.length).toBe(2);
  });

  it("should return the division of the two numbers", () => {
    expect(divide(10, 2)).toEqual(5);
    expect(divide(20, 4)).toEqual(5);
    expect(divide(100, 10)).toEqual(10);
  });

  it("should return undefined if any of the arguments is not provided", () => {
    expect(divide(1)).toEqual(undefined);
    expect(divide()).toEqual(undefined);
    expect(divide(undefined, 1)).toEqual(undefined);
  });

  it("should return undefined if any of the arguments is not a number", () => {
    expect(divide("a", 2)).toEqual(undefined);
    expect(divide(1, "b")).toEqual(undefined);
    expect(divide(null, 2)).toEqual(undefined);
    expect(divide(1, null)).toEqual(undefined);
    expect(divide(true, 2)).toEqual(undefined);
    expect(divide(1, true)).toEqual(undefined);
  });

  it("should return undefined if the second argument is zero", () => {
    expect(divide(1, 0)).toEqual(undefined);
  });
});
