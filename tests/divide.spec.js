describe("Iteration 2", () => {
	describe("Function - divide", () => {
		// Each `it` block represents 1 test. You can use the following as a template:
		it("should have the function divide defined", () => {
			expect(typeof divide).toBe("function");
		});
		it("should take two numbers as arguments", () => {
			expect(divide.length).toBe(2);
		});
		it("should return the division of two numbers", () => {
			expect(divide(4, 2)).toBe(2);
			expect(divide(100, 4)).toBe(25);
		});
		it("should return undefined if any of the two arguments is not provided", () => {
			expect(divide()).toBe(undefined);
			expect(divide(1)).toBe(undefined);
			expect(divide(undefined, 2)).toBe(undefined);
		});
		it("should return undefined if any of the arguments is not a number", () => {
			//expect(add(undefined)).toEqual(undefined);
			expect(divide("1", 2)).toEqual(undefined);
			expect(divide(2, "1")).toEqual(undefined);
			expect(divide("1", "2")).toEqual(undefined);
		});
	});
});
