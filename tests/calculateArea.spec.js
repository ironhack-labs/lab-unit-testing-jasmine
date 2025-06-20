describe("Function calculateArea", () => {
  it("should be defined", () => {
    expect(calculateArea).toBeDefined();
  });

  it("should take two arguments", () => {
    expect(calculateArea.length).toBe(2);
  });

  it("should return the rectangle area (width × height)", () => {
    expect(calculateArea(2, 3)).toBe(6);
    expect(calculateArea(5, 4)).toBe(20);
  });

  it("should return undefined if any argument is missing", () => {
    expect(calculateArea(2)).toBeUndefined();
    expect(calculateArea()).toBeUndefined();
    expect(calculateArea(undefined, 3)).toBeUndefined();
  });
});