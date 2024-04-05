LAB | Unit Testing with Jasmine
gif

Learning Goals

Introduction
In this lab, you will practice writing JavaScript programs following the TDD (Test-Driven Development) approach. You will be given a series of functions that you will need to implement. For each function, your task will be first to write the unit tests and then implement the function.

Let's do some unit testing! 🧪

Requirements
Fork this repo.
Clone this repo.

Submission
Upon completion, run the following commands:
git add .
git commit -m "Solved lab"
git push origin master
Create a Pull Request and submit your assignment

Instructions
Jasmine
For this lab, you will be using Jasmine to write your tests. We have already set up the testing environment for you to make things easier. All the JavaScript files and the test files are already linked to the SpecRunner.html file, so you don't need to worry about that.

You will be using the SpecRunner.html file to run your tests. To open the file, you can use the Live Server extension in VS Code.

If you need a refresher on the Jasmine syntax, check this Jasmine Tutorial (10 min. read).

TDD & Red-Green-Refactor
During each iteration, your task will be first to write the unit tests and then implement the function. To make the process easier, you should follow the Red-Green-Refactor cycle:

🔴 Red: Write a test first and watch it fail.
🟢 Green: Write the code to make the test pass.
🟠 Refactor: Improve your code if needed and make sure all tests still pass.

Iteration 1 | Getting Started
To help you get started, we have provided you with the first function add and the corresponding unit tests. You can find the function code in the src/add.js file and the unit tests in the tests/add.spec.js file.

Your task in this iteration is to review the unit test in tests/add.spec.js and the function code in src/add.js and try to understand how they work. After doing it, you should answer the following questions and complete the following tasks:

Review the Tests

How many tests are there for the add function in the add.spec.js file?

How are the blocks describe and it being used in the tests? What is the purpose of each?

How are the test descriptions phrased? Are there any keywords that stand out?

What do the expect functions do, and what input do they take?

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
After you are done refactoring, check the tests one last time to make sure everything is still working fine after refactoring.

Solution

Iteration 2 | Divide
Now that you have a better understanding of how the Jasmine unit tests work, it's time to repeat the process. 🧪

Following the example of the add function and its unit tests, write the unit tests for the divide function and then implement the function.

Files: tests - tests/divide.spec.js | code - src/divide.js

Here are the requirements for the divide function:

The function should be defined.
The function should take two numbers as arguments.
The function should return the division of the two numbers.
The function should return undefined if any of the arguments is not provided

Here are the steps you should follow:

Write the unit tests for the divide function in the tests/divide.spec.js file. Make sure to include at least one test for each of the requirements listed above.
You can use the unit tests for the add function as a reference.
Run the tests by opening the SpecRunner.html file using the Live Server extension. You should see that all tests are failing.
Implement the function divide function in the src/divide.js file.
Rerun the tests again. You should see that all tests are passing.
Once the tests are passing, review the code and refactor if needed. Some questions to ask: Are there any additional edge cases that you should test for and implement in the function? If so, go ahead and repeat the process of Red-Green-Refactor until you are satisfied with the code.

Solution

Bonus: Iteration 3 | Calculate Area
Following the same process as in the previous iteration, write the unit tests for the calculateArea function and then implement the function.

Files: tests - tests/calculateArea.spec.js | code - src/calculateArea.js

Here are the requirements for the calculateArea function:

The function should be defined.
The function should take two numbers as arguments.
The function should return a number representing the area of a rectangle (the product of the two arguments).
In case any of the arguments is not provided, the function should return undefined.

Remember to follow the Red-Green-Refactor cycle: (1) first write the tests that fail 🔴, before you (2) write the code to make the tests pass 🟢. Once the tests are passing, review the code and (3) refactor if needed 🟠.

Solution

Happy coding! 💙
