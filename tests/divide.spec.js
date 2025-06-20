// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 2 | Function divide", () => {
  it("should be defined", () => {
    expect(divide).toBeDefined();
  });

  it("should take two arguments", () => {
    expect(divide.length).toBe(2);
  });

  it("should return the division of the two numbers", () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(9, 3)).toBe(3);
    expect(divide(-8, 2)).toBe(-4);
  });

  it("should return undefined if any argument is missing", () => {
    expect(divide(6)).toBeUndefined();
    expect(divide()).toBeUndefined();
    expect(divide(undefined, 2)).toBeUndefined();
  });
  
  it("should return undefined if any argument is not a number", () => {
    expect(divide(6, "a")).toBeUndefined();
    expect(divide("b", 3)).toBeUndefined();
  });
});
