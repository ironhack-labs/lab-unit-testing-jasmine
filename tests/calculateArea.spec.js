// UNCOMMENT THE CODE BELOW TO START

describe("Function - calculateArea", () => {
  // Each `it` block represents 1 test. You can use the following as a template:
  it("Should be defined", () => {
    expect(calculateArea).toBeDefined();
  });

  it("The function should take two numbers as arguments", () => {
    expect(calculateArea.length).toBe(2);
  });

  it("Should return the rectangle area by multiplying the two numbers", () => {
    expect(calculateArea(1, 2)).toEqual(2);
    expect(calculateArea(3, 4)).toEqual(12);
    expect(calculateArea(6, 6)).toEqual(36);
  });

  it("Should return undefined if any of the arguments is not provided", () => {
    expect(calculateArea(1)).toEqual(undefined);
    expect(calculateArea()).toEqual(undefined);
    expect(calculateArea(undefined, 1)).toEqual(undefined);
  });

  it("Should return undefined if any of the arguments is not a number", () => {
    expect(calculateArea(1, "2")).toEqual(undefined);
    expect(calculateArea("3", 4)).toEqual(undefined);
    expect(calculateArea("1", "5")).toEqual(undefined);
  });
});