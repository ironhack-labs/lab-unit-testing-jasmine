function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;

    }else if(isNaN(numOne) || isNaN(numTwo)){
        return undefined;
    }else if(typeof(numOne) === 'string' || typeof(numTwo) === 'string'){
        return undefined;
    }

    return numOne + numTwo;
}


// Iteration 1

// Questions:

// 1. How many tests are there for the add function in the add.spec.js file?

// 2. How are the blocks describe and it being used in the tests? What is the purpose of each?

// 3. How are the test descriptions phrased? Are there any keywords that stand out?

// 4. What do the expect functions do, and what input do they take?


// Answers:

// 1. 4

// 2. La función "Describe" se pasa cómo un parametro para definir  con que función vamos a trabajar. 
//    Y los It-s son como los condiciones para ésta función, los que nos indican que es lo que  tiene que pasar con la función "add".

// 3. Las frases que describen lo que tiene que pasar son parametros que se pasan cómo un string

// 4. La función "expect" recibe cómo un parametro  la fn "add" y su funcion es el resultado lo que va a retornar la función principal "add".
