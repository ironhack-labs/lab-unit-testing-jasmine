describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      // Test 1
      // Comprueba si esta la funcion definida en el codigo
      it("should be defined", () => {
        expect(add).toBeDefined();
      });
      // Test 2
      // Comprueba si puede coger dos argumentos
      it("should take two arguments", () => {
        expect(add.length).toBe(2);
      });
      // Test 3
      // Comprueba si la funcion retonar la suma de dos numeros
      it("should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(3, 4)).toEqual(7);
        expect(add(100, 47)).toEqual(147);
      });
      // Test 4
      // Comprueba si la funcion recibe un valor undefined devuelve un valor undefined
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });
      it("The function should return undefined if any of the two arguments is not a number", () => {
        expect(add(1,"2")).toEqual(undefined);
        expect(add("1",2)).toEqual(undefined);
        expect(add("1","2")).toEqual(undefined);
      });
    });
  });
  

// What do the expect functions do, and what input do they take?