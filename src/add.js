
function add(numOne, numTwo) {
    if (isNaN(numOne) || isNaN(numTwo)) {
        return undefined;
    }

    return numOne + numTwo;
}


//QUESTIONS

/*

1. How many tests are there for the add function in the add.spec.js file?
Cuatro, cada uno de los spects "it"

2. How are the blocks describe and it being used in the tests? What is the purpose of each?
La función "describe" es la que agrupa los cuatro tests en los que se deben obtener los resultados esperados.

3. How are the test descriptions phrased? Are there any keywords that stand out?
Con una función que dé como resultado un booleano.

4. What do the expect functions do, and what input do they take?
Debe retornar un valor truthy or falsy.


Review the Code

Review the add function (in the src/add.js file) to understand how functionality is implemented and how it relates to the tests.

Write a New Unit Test

Add a new test using the it function to test for the following requirement:

The function should return undefined if any of the two arguments is not a number.
To run the tests, open SpecRunner.html using the Live Share extension.
As per the Red phase of the Red-Green-Refactor cycle, the test should initially fail 🔴 and that is fine!


Write the Code to Make the Test Pass

Update the code of the add function to make the new test pass.
Once you correctly implement the new functionality, the test should turn green 🟢.

Refactor

Take another look at the add function. Is there anything that could be improved? Could you somehow simplify the code to make it easier to read? 🟠
Podría utilizarse la función isNaN para dar un resultado más claro y referirnos a cualquier valor que no sea un número y no solo a "undefined".

After you are done refactoring, check the tests one last time to make sure everything is still working fine after refactoring.
*/