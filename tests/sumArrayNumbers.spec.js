// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5", () => {
	describe("Function - sumArrayNumbers", () => {
		// Each `it` block represents 1 test. You can use the following as a template:
		it("The function should be defined.", () => {
			expect(sumArrayNumbers).toBeDefined();
		});

		it("The function should take one argument of type array. The array should contain numbers.", () => {
			expect(sumArrayNumbers.length).toBe(1);
		});

		it("The function should return the sum of all numbers in the array", () => {
			expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
			expect(sumArrayNumbers([2, 4, 6])).toEqual(12);
			expect(sumArrayNumbers([200, 50])).toEqual(250);
		});

		it("In case the argument passed is not an array, the function should return undefined.", () => {
			expect(sumArrayNumbers(2)).toEqual(undefined);
			expect(sumArrayNumbers("2")).toEqual(undefined);
			expect(sumArrayNumbers()).toEqual(undefined);
		});

		it("In case the argument passed is an empty array, the function should return 0.", () => {
			expect(sumArrayNumbers([])).toEqual(0);
		});
	});
});
