function add (numOne, numTwo) {
    // if (numOne == undefined || numTwo == undefined) {
    //     return undefined;
    // }

    // if (numOne !== numOne || numTwo !== numTwo) { // NaN is the only value that is not equal to itself
    //     return undefined;
    // }

    // alternative option using 'typeof':
    // if (typeof numOne !== 'number' || typeof numTwo !== 'number' || isNaN(numOne) || isNaN(numTwo)) {
    //     return undefined;
    // } 

    if (numOne === undefined || numTwo === undefined || numOne !== numOne || numTwo !== numTwo) {
        return undefined;
    }

    return numOne + numTwo;
}

/*
1. How many tests are there for the add function in the add.spec.js file?
    4

2. How are the blocks 'describe' and 'it' being used in the tests? What is the purpose of each?
    'describe' = specifies the iteration number + name as title and the function to test as a subtitle
    'it' = represents the different sections within the first iteration aka the tests

3. How are the test descriptions phrased? Are there any keywords that stand out?
    syntax is similar: literal messages that will appear on the browser are orange;
    describe (yellow) matches each test title
    it + expected (yellow) allows to add the tests to test the functionality

4. What do the expect functions do, and what input do they take?
    expect function determines what the test input and output should be

5. Review the add function (in the src/add.js file) to understand how functionality is implemented and 
   how it relates to the tests.
    done

6. Add a new test using the it function to test for the following requirement:
   The function should return undefined if any of the two arguments is not a number.
    done

7. To run the tests, open SpecRunner.html using the Live Share extension.
   As per the Red phase of the Red-Green-Refactor cycle, the test should initially fail 🔴 and that is fine!
    done

8. Update the code of the add function to make the new test pass.
    Once you correctly implement the new functionality, the test should turn green 🟢.
    done: (numOne !== numOne || numTwo !== numTwo)
    *** NaN is the only value that is not equal to itself ***

9. Take another look at the add function. Is there anything that could be improved? Could you somehow simplify the code to make it easier to read? 🟠
    done

10.After you are done refactoring, check the tests one last time to make sure everything is still working fine after refactoring.
    done

*/