![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Unit Testing with Jasmine

<p align="center">
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVjanFvdnUwZmo2eHAyMjBtb2xia2t3NmlhdzRzZmpneHEwYTN1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gw3IWyGkC0rsazTi/giphy.gif" alt="gif" />
</p>


<br>


<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>


This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Set up a testing environment using Jasmine in the browser
- Use Test-Driven Development (TDD) approach to write JavaScript programs
- Create unit tests for your JavaScript code using Jasmine

</details>

<br>



## Introduction

In this lab, you will practice writing JavaScript programs following the TDD (Test-Driven Development) approach. You will be given a series of functions that you will need to implement. For each function, your task will be first to write the unit tests and then implement the function.
<br>

Let's do some unit testing! 🧪 

<br>



### Jasmine

For this lab, you will be using Jasmine to write your tests.
To make things easier, we have already set up the testing environment for 
you. You will be using the `SpecRunner.html` file to run your tests. To open the file, you can use the Live Server extension in VS Code. All the JavaScript files and the test files are already linked to the `SpecRunner.html` file, so you don't need to worry about that.
<br>

In case you need a refresher on the Jasmine syntax, check this [*Jasmine Tutorial*](https://jasmine.github.io/tutorials/your_first_suite) *(10 min. read)*.

<br>



### TDD & Red-Green-Refactor

During each iteration, your task will be first to write the unit tests and then implement the function. To make the process easier, you should follow the Red-Green-Refactor cycle:

- 🔴 **Red**: Write a test first and watch it fail.
- 🟢 **Green**: Write the code to make the test pass. 
- 🟠 **Refactor**: Improve your code if needed and make sure all tests still pass.

<br>



## Instructions

### Iteration 1 | Getting Started

To help you get started, we have provided you with the first function `add` and the corresponding unit tests. You can find the function code in the `src/add.js` file and the unit tests in the `tests/add.test.js` file.



Your task in this iteration is to review the unit test in  `tests/add.test.js` and the function code in `src/add.js` and try to understand how they work. After doing it, you should answer the following questions and complete the following tasks:

<br>



**Review the Tests**

1. How many tests are there for the `add` function in the `add.test.js` file?



2. How are the blocks `describe` and `it` being used in the tests? What is the purpose of each?



3. How are the test descriptions phrased? Are there any keywords that stand out?



4. What do the `expect` functions do, and what input do they take?

<br>



**Review the Code**

5. Review the `add` function (in the `src/add.js` file) to understand how functionality is implemented and how it relates to the tests.

<br>



**Write a New Unit Test**

6. Add a new test using the `it` function to test for the following requirement:
   - The function should return `undefined` if any of the two arguments is not a number.<br>




7. To run the tests, open `SpecRunner.html` using the Live Share extension.<br>As per the Red phase of the Red-Green-Refactor cycle, the test should initially fail 🔴 and that is fine!

<br>



**Write the Code to Make the Test Pass** 

8. Update the code of the `sum` function to make the new test pass.<br>Once you correctly implement the new functionality, the test should turn green 🟢.

<br>



**Refactor**

9. Take another look at the `sum` function. Is there anything that could be improved? Do you see any way that you could simplify the code to make it easier to read?<br>After you are done refactoring, check the tests one last time to make sure everything is still working fine after refactoring. 



<br>

----

### Iteration 2 | Divide

Now that you have a better understanding of how the unit tests work, it's time to repeat the process. 🧪

Following the example of the `sum` function and its unit tests, write the unit tests for the `divide` function and then implement the function. You should write your unit tests in the `tests/divide.test.js` file and your function code in the `src/divide.js` file.



Here are the requirements for the `divide` function:
- The function should take two numbers as arguments.
- The function should return the division of the two numbers.
- In case any of the arguments is not provided, the function should return `undefined`.

<br>



Here are the steps you should follow:
1. Write the unit tests for the `divide` function in the `tests/divide.test.js` file. Make sure to include at least one test for each of the requirements listed above. You can use the unit tests for the `sum` function as a reference.
2. Run the tests by opening the `SpecRunner.html` file using the Live Server extension. You should see that all tests are failing.
3. Implement the function `divide` function in the `src/divide.js` file.
4. Run the tests again. You should see that all tests are passing.


<br>

----


### Iteration 3 | Calculate Area

Following the same process as in the previous iteration, write the unit tests for the `calculateArea` function and then implement the function. You should write your unit tests in the `tests/calculateArea.test.js` file and your function code in the `src/calculateArea.js` file.



Here are the requirements for the `calculateArea` function:
- The function should take two numbers as arguments.
- The function should return a number representing the area of a rectangle (the product of the two arguments).
- In case any of the arguments is not provided, the function should return `undefined`.

<br>



Remember to follow the Red-Green-Refactor cycle: **(1)** first write the tests that fail 🔴, before you **(2)** write the code to make the tests pass 🟢. Once the tests are passing, review the code and **(3)** refactor if needed 🟠.

<br>



----


### Iteration 4 | Print Full Name

In this iteration, your task is to write the unit tests for the `printFullName` function and then implement the function. You should write your unit tests in the `tests/printFullName.test.js` file and your function code in the `src/printFullName.js` file.



Here are the requirements for the `printFullName` function:
- The function should take one argument of type object. The object should have two properties: `firstName` and `lastName`.
- The function should return a string with the first name and the last name separated by a space.
- In case the argument passed is not an object, the function should return `undefined`.
- In case the `firstName` or `lastName` properties are not provided, the function should return `undefined`.

<br>



----

### Bonus: Iteration 5 | Sum Array Numbers

In this iteration, your task is to write the unit tests for the `sumArrayNumbers` function and then implement the function. You should write your unit tests in the `tests/sumArrayNumbers.test.js` file and your function code in the `src/sumArrayNumbers.js` file.

Here are the requirements for the `sumArrayNumbers` function:
- The function should take one argument of type array. The array should contain numbers.
- The function should return the sum of all numbers in the array.
- In case the argument passed is not an array, the function should return `undefined`.
- In case the argument passed is an empty array, the function should return `0`.

<br>

----

<br>
