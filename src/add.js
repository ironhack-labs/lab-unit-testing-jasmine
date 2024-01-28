function add (numOne, numTwo) {
    /*if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }*/
    if (typeof numOne !== "number" || typeof numTwo !== "number"){
        return undefined;
    }
    
    return numOne + numTwo;
    
}

/*
1. 4

2. Son unit tests utilizados para probar y verificar que:
-La función esté definida
-Que tengan dos argumentos, por lo que el largo (.length) sea 2
-Que devuelva la suma de esos dos argumentos
-Que nos retorne undefined si cualquiera de los dos argumentos no esté relleno,
sea por que se haya puesto solo un argumento numérico, no se haya aportado ningún argumento o
que al menos uno de ellos sea undefined.

Los bloques describe son funciones que se utilizan para agrupar los bloques it, que son donde
se realizan esos pequeños tests.

3

4.Las funciones expect marcan lo que se espera que reciban y que hagan esos test.

*/