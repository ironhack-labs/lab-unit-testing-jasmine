describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
        it("should be defined", () => {
            expect(add).toBeDefined(); // Se comprueba que la función add está creada.
        });

        it("should take two arguments", () => {
            expect(add.length).toBe(2); // Aquí se usa la propiedad length de la función add par asegurarse de que el número de parámetros sea dos.
        });

        it("should return the sum of the two numbers", () => {
            expect(add(1, 2)).toEqual(3);
            expect(add(3, 4)).toEqual(7);
            expect(add(100, 47)).toEqual(147); // Se espera la suma de los números de los argumentos, pone ejemplos.
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined); // Comprueba si add devuelve undefined si faltan argumentos.
        });

        it('Should return undefined if any of the two arguments is not a number', () => {
            expect(add(1, '2')).toEqual(undefined); // Si es number y string, undefined.
            expect(add('3', 4)).toEqual(undefined); // Si es string y number, undefined.
            expect(add('50', '90')).toEqual(undefined); // Si es string y string, undefined.

            // Si es number y number, que es lo que hace falta para hacer una suma, todo correcto.
        });
    });
});

describe("Iteration 2", () => {
    describe("Function - divide", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            exoect(divide).toBeDefined()
        });

        it("Should take two numbers as arguments", () => {
            expect(divide.length).toBe(2) // Se espera que el length tenga dos argumentos.
        })

        it("Should return the division of the two numbers", () => {
            expect(divide(1, 2)).toBe(0, 5)
            expect(divide(2, 10)).toBe(0, 2)
            expect(divide(50, 10)).toBe(5)
        })

        it("Should return undefined if there is no arguments", () => {
            expect(divide(1)).toEqual(undefined)
            expect(divide()).toEqual(undefined)
            expect(divide(undefined, 1)).toEqual(undefined)
            expect(divide(1, undefined)).toEqual(undefined)
        })
    })
})