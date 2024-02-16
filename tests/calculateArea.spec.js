// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
	describe("Function - calculateArea", () => {
		// Each `it` block represents 1 test. You can use the following as a template:
		it("The function should be defined.", () => {
			expect(calculateArea).toBeDefined();
		});

		it("The function should take two numbers as arguments", () => {
			expect(calculateArea.length).toBe(2);
		});

		it("The function should return a number representing the area of a rectangle (the product of the two arguments", () => {
			expect(calculateArea(10, 2)).toEqual(20);
			expect(calculateArea(50, 5)).toEqual(250);
			expect(calculateArea(200, 50)).toEqual(10000);
		});

		it("The function should return undefined if any of the arguments is not provided", () => {
			expect(calculateArea("", 2)).toEqual(undefined);
			expect(calculateArea(50, "")).toEqual(undefined);
			expect(calculateArea()).toEqual(undefined);
		});
	});
});
