function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    if( typeof numOne != 'number' || typeof numTwo != 'number') {
        return undefined;
    }

    return numOne + numTwo;
}


// ¿Cuántas pruebas hay para la addfunción en el add.spec.jsarchivo?
// 4 test.

// ¿Cómo son los bloques describe y it cómo se utilizan en las pruebas? ¿Cuál es el propósito de cada uno?
// Describir e implementa el resultado esperado en cada test.

// ¿Cómo están redactadas las descripciones de las pruebas? ¿Hay alguna palabra clave que destaque?
// La palabra reservaba it, en al cual redactamos lo que queremos lograr.

// ¿Qué hacen las expect funciones y qué entrada aceptan?
// Se programa la salida esperada por el sistema y el cual el test debe verificar.