function divide(numbero1, numbero2) {
    if (typeof numbero1 !== "number" || typeof numbero2 !== "number") {
        return undefined;
    }
    return numbero1 / numbero2;
}



/*Here are the steps you should follow:

Write the unit tests for the divide function in the tests / divide.spec.js file.Make sure to include at least one test for each of the requirements listed above.
You can use the unit tests for the add function as a reference.
Run the tests by opening the SpecRunner.html file using the Live Server extension.You should see that all tests are failing.
    Implement the function divide function in the src / divide.js file.
Rerun the tests again.You should see that all tests are passing.
Once the tests are passing, review the code and refactor if needed.Some questions to ask: Are there any additional edge cases that you should test for and implement in the function? If so, go ahead and repeat the process of Red - Green - Refactor until you are satisfied with the code.
*/