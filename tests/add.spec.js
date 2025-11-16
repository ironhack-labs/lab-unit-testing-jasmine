// Iteration 1 | Getting Started
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

    it("should return undefined if any argument is not a number", () => {
      expect(add(1, "a")).toEqual(undefined);
      expect(add(true, 2)).toEqual(undefined);
      expect(add(null, 2)).toEqual(undefined);
    });
  });
});

// Iteration 2 | Divide
describe("Iteration 2 | Divide", () => {
  describe("Function divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of two numbers", () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(10, 2)).toBe(5);
    });

    it("should return undefined if any argument is missing", () => {
      expect(divide(5)).toBeUndefined();
      expect(divide()).toBeUndefined();
    });

    it("should return undefined if any argument is not a number", () => {
      expect(divide(5, "a")).toBeUndefined();
      expect(divide(true, 2)).toBeUndefined();
    });
  });
});

// Iteration 3 | Calculate Area
describe("Iteration 3 | Calculate Area", () => {
  describe("Function calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the area of a rectangle", () => {
      expect(calculateArea(5, 10)).toBe(50);
      expect(calculateArea(2, 3)).toBe(6);
    });

    it("should return undefined if any argument is missing", () => {
      expect(calculateArea(5)).toBeUndefined();
      expect(calculateArea()).toBeUndefined();
    });

    it("should return undefined if any argument is not a number", () => {
      expect(calculateArea(5, "a")).toBeUndefined();
      expect(calculateArea(true, 2)).toBeUndefined();
    });
  });
});

/* --- Funciones implementadas --- */
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return undefined;
  return a + b;
}

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return undefined;
  return a / b;
}

function calculateArea(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return undefined;
  return a * b;
}

  