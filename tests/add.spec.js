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

    it("should return undefined if any of the arguments is not number", () => {
      expect(add(2, '1')).toBe(undefined);
      expect(add('2', 1)).toBe(undefined);
      expect(add('2', '1')).toBe(undefined);
    });

  });
});

describe("Iteration 2 | Divide", () => {
  describe("Function div", () => {
    it("should be defined", () => {
      expect(div).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(div.length).toBe(2);
    });

    it("should return the divide of the two numbers", () => {
      expect(div(10, 2)).toEqual(5);
      expect(div(8, 2)).toEqual(4);
      expect(div(100, 2)).toEqual(50);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(div(1)).toEqual(undefined);
      expect(div()).toEqual(undefined);
      expect(div(undefined, 1)).toEqual(undefined);
    });

  });
});