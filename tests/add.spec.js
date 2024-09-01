describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("should be defined", () => {
        expect(add).toBeDefined(); //--> verifica si la función está defina, que no sea undefined
      });
  
      it("should take two arguments", () => {
        expect(add.length).toBe(2); //--> Verifica que tanto el tipo como el valor sean los esperados, comprueba que la function add reciba dos parámetros
      });
  
      it("should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3); //--> verificamos que la function sume bien, usando el metodo .toEquals y asignando una operacion que sabemos que será true
        expect(add(3, 4)).toEqual(7); // lo mismo
        expect(add(100, 47)).toEqual(147); // Lo mismo
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined); //--> esperamos undefined si solo se agrega un parametro a la funcion
        expect(add()).toEqual(undefined); //--> esperamos undefined si no se agregan parametros
        expect(add(undefined, 1)).toEqual(undefined); //--> esperamos undefined si uno de los parametros en undefined
      });

      it("The function should return undefined if any of the two arguments is not a number.",() => {
        expect(add(1,"4")).toEqual(undefined);
        expect(add("9","7")).toEqual(undefined);
        expect(add("3",10)).toEqual(undefined);
      })
    });
});

  /*
¿Cuántas pruebas hay para la addfunción en el add.spec.jsarchivo?
- Tenemos cuatro pruebas.

¿Cómo son los bloques describe y it cómo se utilizan en las pruebas? ¿Cuál es el propósito de cada uno?
- Con la function describe creamos nuestro entorno para las pruebas.
- Con la function it creamos el entorno para la prueba en si misma.

¿Cómo están redactadas las descripciones de las pruebas? ¿Hay alguna palabra clave que destaque?
- Cada prueba tiene su propia descripcion de lo que se va a evaluar.

¿Qué hacen las expectfunciones y qué entrada toman?
- Con la funcion expect expresamos lo que esperamos que haga el codigo
  */
  