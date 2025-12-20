describe("Divide function", function () {

  it("should be defined", function () {
    expect(divide).toBeDefined();
  });

  it("should take two arguments", function () {
    expect(divide.length).toBe(2);
  });

  it("should return the division of the two numbers", function () {
    expect(divide(4, 2)).toBe(2);
    expect(divide(10, 5)).toBe(2);
    expect(divide(9, 3)).toBe(3);
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(5.5, 2)).toBe(2.75);
  });

  it("should return undefined if any of the arguments is not provided", function () {
    expect(divide(10)).toBeUndefined();
    expect(divide()).toBeUndefined();
    expect(divide(undefined, 5)).toBeUndefined();
    expect(divide(5, undefined)).toBeUndefined();
    expect(divide(null, 5)).toBeUndefined();
  });

  // Bonus: división por cero
  it("should return Infinity or -Infinity when dividing by zero", function () {
    expect(divide(10, 0)).toBe(Infinity);
    expect(divide(-10, 0)).toBe(-Infinity);
    expect(divide(0, 0)).toBe(NaN);
  });

});