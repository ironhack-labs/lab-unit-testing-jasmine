function add(numOne, numTwo) {
	//comprobacion del 2do parametro
	if (
		typeof numOne !== "number" ||
		typeof numTwo !== "number" ||
		Number.isNaN(numTwo)
	) {
		return undefined;
	}

	return numOne + numTwo;
}

//Answer

//1. hay 4 pruebas para esta funcion
//2. La funcion "describe" sirve para agrupar pruebas relacionadas.
// la funcion "it" se utiliza para definir una unica prueba, y debe contener la funcion "expect" esta funcion la utilizamos para escribir las expectativas de las pruebas.
//3. Si para redactar las  descripciones de la pruebas debemos empezar por la keyword "describe".
//4. La funcion "expect" ahi declaramos las espectativas que tenemos del codigo que vamos a probar. El paramentro que toman: es el valor que vamos a probar.
