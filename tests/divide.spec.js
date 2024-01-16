describe("Iteration 2 | Divide", () => {
  describe("Function - divide", () => {
  it("should be defined", () => {
    expect(divide).toBeDefined();
  });
  it("should take two arguments", () => {
    expect(divide.length).toBe(2);
  });
  it("should return the division of the two numbers", () => {
    expect(divide(1, 2)).toEqual(0.5);
    expect(divide(50, 5)).toEqual(10);
    expect(divide(600, 12)).toEqual(50);
  });
  it("should return undefined if any of the arguments is not provided", () => {
    expect(divide(undefined, 5)).toEqual(undefined);
    expect(divide()).toEqual(undefined);
    expect(divide(1)).toEqual(undefined);
    expect(divide(1, "2")).toEqual(undefined);
    expect(divide("1", 2)).toEqual(undefined);
    expect(divide("1", "2")).toEqual(undefined);
  })
})
})