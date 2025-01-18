describe("Function calculateArea", () => {
  it("should be defined", () => {
    expect(calculateArea).toBeDefined();
  });

  it("should take two arguments", () => {
    expect(calculateArea.length).toBe(2);
  });

  it("should return the area of a rectangle (product of the two arguments)", () => {
    expect(calculateArea(5, 4)).toEqual(20);
    expect(calculateArea(3, 7)).toEqual(21);
    expect(calculateArea(10, 10)).toEqual(100);
  });

  it("should return undefined if any of the arguments is not provided", () => {
    expect(calculateArea(5)).toEqual(undefined);
    expect(calculateArea()).toEqual(undefined);
    expect(calculateArea(undefined, 4)).toEqual(undefined);
  });
});
