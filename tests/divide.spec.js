// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/
describe("Function divide", function () {
  
  it("should be defined", function () {
    expect(divide).toBeDefined();
  });

  it("should take two arguments", function () {
    expect(divide.length).toBe(2);
  });

  it("should return the division of the two numbers", function () {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
  });

  it("should return undefined if any argument is not provided", function () {
    expect(divide(10)).toBeUndefined();
    expect(divide()).toBeUndefined();
  });

  it("should return undefined if any argument is not a number", function () {
    expect(divide("10", 2)).toBeUndefined();
    expect(divide(10, null)).toBeUndefined();
    expect(divide({}, 2)).toBeUndefined();
  });

});