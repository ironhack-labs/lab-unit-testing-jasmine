// UNCOMMENT THE CODE BELOW TO START

describe("divide", function() {
    // Prueba 1: La función debe estar definida.
    it("should be defined", function() {
      expect(divide).toBeDefined();
    });
  
    // Prueba 2: La función debe tomar dos números como argumentos.
    it("should take two numbers as arguments", function() {
      expect(divide.length).toBe(2); // Verifica que la función espera 2 argumentos.
    });
  
    // Prueba 3: La función debe devolver la división de los dos números.
    it("should return the division of two numbers", function() {
      expect(divide(10, 2)).toBe(5); // 10 / 2 = 5
      expect(divide(9, 3)).toBe(3);  // 9 / 3 = 3
      expect(divide(1, 2)).toBe(0.5); // 1 / 2 = 0.5
    });
  
    // Prueba 4: La función debe devolver undefined si no se proporciona alguno de los argumentos.
    it("should return undefined if either argument is not provided", function() {
      expect(divide(10)).toBeUndefined(); // Falta el segundo argumento.
      expect(divide(undefined, 2)).toBeUndefined(); // Falta el primer argumento.
      expect(divide()).toBeUndefined(); // Faltan ambos argumentos.
    });
  
    // Prueba adicional: La función debe devolver undefined si alguno de los argumentos no es un número.
    it("should return undefined if either argument is not a number", function() {
      expect(divide(10, "2")).toBeUndefined(); // "2" no es un número.
      expect(divide("10", 2)).toBeUndefined(); // "10" no es un número.
      expect(divide("a", "b")).toBeUndefined(); // Ambos no son números.
    });
  });