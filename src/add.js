function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (typeof numOne != "number" || typeof numTw0 != "number" ) {
        return undefined;
    }
    return numOne + numTwo;
}





// 1. 4
// 2. Describe contiene cada uno de los tests, los tests se definen con it
// 3. Las descripciones de las pruebas están entre "". Should es un testeo, debe hacer una operación para comprobar que se cumpla
// 4. Expect, es el resultado que está esperando y recibe argumentos
