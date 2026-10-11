// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})


describe("Iteration 3", function () {
  it("should calculate the area of a rectangle", function () {
    expect(calculateArea(5, 3)).toBe(15);
    expect(calculateArea(10, 4)).toBe(40);
    expect(calculateArea(7, 7)).toBe(49);
  });

  it("should have two parameters", function () {
    expect(calculateArea.length).toBe(2);
  });

  it("should return undefined if arguments are missing", function () {
    expect(calculateArea()).toBeUndefined();
    expect(calculateArea(5)).toBeUndefined();
  });
});
