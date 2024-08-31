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

      // La función debe retornar undefined si alguno de los dos argumentos no es un número.
      it("should return undefined if any of the two arguments is not a number.", () => {
        expect(add("notNumber", 1)).toBeUndefined();
        expect(add(1, "notNumber")).toBeUndefined();
      });
    });
  });

  // 1. Hay 5 pruebas
  // 2. 'describe' agrupa las pruebas. 'it' es cada prueba unitaria
  // 3. Son descriptivas - La palabra 'should' es destacada para describir que debe hacer la función
  // 4. 'expect' sirve para saber la expectativa de la entrada. Y luego con el 'matcher' -> (toEqual, toBeUndefined) la salida esperada