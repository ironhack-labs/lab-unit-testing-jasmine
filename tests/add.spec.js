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
      it("should return undefined if any of the two arguments is not a number", () => {
        expect(add(1,"2")).toEqual(undefined);
        expect(add("3",2)).toEqual(undefined);
        expect(add("1","2")).toEqual(undefined);
      });
    });
  });
  

  describe("Iteration 2 | Divide", () => {
    describe("Function divide", () => {

      it("should be defined", () => {
        expect(divide).toBeDefined();
      });

      it("should take two arguments", () => {
        expect(divide.length).toBe(2);
      });

      it("should return the division of the two numbers", () => {
        expect(divide(10,5)).toBe(2);
        expect(divide(100,5)).toBe(20);
        expect(divide(5,10)).toBe(0.5);
      });

      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(10)).toBe(undefined);
        expect(divide()).toBe(undefined);
        expect(divide(undefined,1)).toBe(undefined);
      });

    })
  })

  describe("Iteration 3 | Area", () => {
    describe("Function area", () => {

      it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });

      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });

      it("should return a number representing the area of a rectangle", () => {
        expect(calculateArea(10,5)).toBe(50);
        expect(calculateArea(100,5)).toBe(500);
        expect(calculateArea(5,10)).toBe(50);
      });

      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(10)).toBe(undefined);
        expect(calculateArea()).toBe(undefined);
        expect(calculateArea(undefined,1)).toBe(undefined);
      });

    })
  })