describe("function centsToDecimals", () => {
  it("Should convert value from cents to floating point number with 2 decimals", () => {
    expect(centsToDecimals(105)).toBe(1.05);
    expect(centsToDecimals(23)).toBe(0.23);
  });
});
