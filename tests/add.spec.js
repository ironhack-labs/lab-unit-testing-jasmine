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
        expect(add(1, "2")).toEqual(undefined);
        expect(add("3", 4)).toEqual(undefined);
        expect(add("100", "47")).toEqual(undefined);
      });
    });
  });
  /* Test
  1- 4 pruebas
  2- describe: es lo que tienes que hacer en este caso "Add"/"Añadir"
     it: Son unas condiciones que el test debe pasar para ver que es correcto. 
  3- las descripciones se hacen en comillas como strings.
  4- los expect son lo que se espera que tu código haga. por ejemplo la suma de 100 y 47 debe dar 147

  */