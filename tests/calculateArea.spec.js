describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("La función debe estar definida.", () => {
      expect (calculateArea).toBeDefined()
    });


    it("La función debe tomar dos números como argumentos.", () => {
      expect(calculateArea.length).toBe(2);
    });


    it("La función debe devolver un número que represente el área de un rectángulo (el producto de los dos argumentos).", () => {
      expect(calculateArea(6,8)).toEqual(48);
      expect(calculateArea(10,10)).toEqual(100);
      expect(calculateArea(2,1)).toEqual(2);
    });


    it("En caso de que no se proporcione alguno de los argumentos, la función debe devolver undefined.", () => {
      expect(calculateArea(4)).toEqual(undefined)
      expect(calculateArea(undefined,7)).toEqual(undefined)
      expect(calculateArea()).toEqual(undefined)
    });

    it("en caso que uno de los valores no sea de tipo number", () => {
      expect(calculateArea(4,"7")).toEqual(undefined)
      expect(calculateArea("1",7)).toEqual(undefined)
      expect(calculateArea("10","8")).toEqual(undefined)
    });
  });
});
