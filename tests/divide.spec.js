//UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("Si el divisor es igual a 0 tiene que devolver undefined", () => {
      expect(divide(9,  0).toBe(undefined));
      expect(divide(20,  0).toBe(undefined));
      expect(divide(19 , 0).toBe(undefined));
    });
    it("Debe tomar dos argumentos", () => {
      expect(divide.length).toBe(2);
    });
    it("Ambos argumentos han de estar definidos", () => {
      expect(divide).toBeDefined();
    });
    it("Tiene que retornar undefined si cualquier argumento no es un número", () => {
      expect(divide("patata", 2)).toEqual(undefined);
      expect(divide(["rainbow", "forest"], 6)).toEqual(undefined);
      expect(divide(25, true)).toEqual(undefined);
    });
    it("tiene que devolver undefined si alguno de los argumentos no esta provisto", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });
  });
});
