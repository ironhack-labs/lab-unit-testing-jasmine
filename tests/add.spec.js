describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(add.length).toBe(2);
      });
  
      it("should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(3, 4)).toEqual(7);
        expect(add(100, 47)).toEqual(147);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });
      it("should return undefined if either argument is not a number", () => {
       expect(add(5, "hello")).toEqual(undefined);

    });
    });
  });
  
    describe("Function divide", () => {
  it("should be defined", () => {
    expect(divide).toBeDefined();
  });
  it("should take two arguments", () => {
    expect(divide.length).toBe(2);
});
  it("should return the division of the two numbers", () => {
    expect(divide(10, 2)).toEqual(5);
});
  it("should return undefined if any of the arguments is not provided", () => {
    expect(divide()).toEqual(undefined);
    expect(divide(1)).toEqual(undefined);
});
  it("should return undefined when dividing by zero", () => {
    expect(divide(10, 0)).toEqual(undefined);
});
});

describe("Function calculate area", () => {
  it("should be defined", () => {
    expect(calculateArea).toBeDefined();
});
  it("should take two arguments", () => {
     expect(calculateArea.length).toBe(2);
});
  it("should return the area of a rectangle", () => {
    expect(calculateArea(5, 3)).toEqual(15);
});
  it("should return undefined if any argument is missing", () => {
  expect(calculateArea(1)).toEqual(undefined);
});
});
