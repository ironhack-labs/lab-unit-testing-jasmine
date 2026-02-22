// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
	describe("Function - calculateArea", () => {
		// Each `it` block represents 1 test. You can use the following as a template:
		it("The function should be defined", () => {
			expect(calculateArea).toBeDefined();
		});

		it("The function should take two numbers as arguments", () => {
			expect(calculateArea.length).toBe(2);
		});

		it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
			expect(calculateArea(3, 4)).toEqual(12);
			expect(calculateArea(-2, -4)).toEqual(8);
			expect(calculateArea(2, 0)).toEqual(0);
		});
		it("In case any of the arguments is not provided, the function should return undefined.", () => {
			expect(calculateArea(2)).toEqual(undefined);
			expect(calculateArea(2, undefined)).toEqual(undefined);
			expect(calculateArea()).toEqual(undefined);
			expect(calculateArea(undefined, 2)).toEqual(undefined);
		});
		it("The function should return undefined if any of the arguments is not a number.", () => {
			expect(calculateArea("2")).toEqual(undefined);
			expect(calculateArea("2", "5")).toEqual(undefined);
			expect(calculateArea(2, undefined)).toEqual(undefined);
			expect(calculateArea()).toEqual(undefined);
			expect(calculateArea(undefined, 2)).toEqual(undefined);
		});
		it("The function should return undefined if any of the arguments is null.", () => {
			expect(calculateArea("2")).toEqual(undefined);
			expect(calculateArea("2", "5")).toEqual(undefined);
			expect(calculateArea(2, undefined)).toEqual(undefined);
			expect(calculateArea()).toEqual(undefined);
			expect(calculateArea(undefined, 2)).toEqual(undefined);
		});
	});
});
