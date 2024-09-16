describe("Function calculateArea", () => {
  it("should be defined", () => {
    expect(calculateArea).toBeDefined();
  });

  it("should take two numbers as a argument", () => {
    expect(calculateArea.length).toBe(2);
  });

  it("should return a number representing the area of a rectangle, ", () => {
    expect(calculateArea(1, 2)).toEqual(2);
    expect(calculateArea(3, 4)).toEqual(12);
    expect(calculateArea(100, 47)).toEqual(4700);
  });

  it("should return undefined if any of the arguments is not provided" , () => {
    expect(calculateArea(1 , "")).toEqual(undefined);
    expect(calculateArea("", 1)).toEqual(undefined);
    expect(calculateArea("" , "")).toEqual(undefined);
});
});