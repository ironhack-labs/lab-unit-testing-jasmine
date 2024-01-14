// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
	describe("Function - printFullName", () => {
		// Each `it` block represents 1 test. You can use the following as a template:
		it("should be defined.", () => {
			expect(printFullName).toBeDefined();
		});
		it("should take one argument of type object. ", () => {
			expect(printFullName.length).toBe(1);
		});
		it("should return a string with the first name and the last name separated by a space.", () => {
			expect(printFullName({firstName: "Vlad",lastName: "Tkach",})).toEqual("Vlad Tkach");
			expect(printFullName({firstName: "Sandra",lastName: "Tkach",})).toEqual("Sandra Tkach");
		});

		it("In case the argument passed is not an object, the function should return undefined.", () => {
			expect(printFullName({ firstName: "Vlad" })).toEqual(undefined);
			expect(printFullName(123)).toEqual(undefined);
			expect(printFullName(true)).toEqual(undefined);
		});
		it("In case the firstName or lastName properties are not provided, the function should return undefined", () => {
			expect(printFullName({ firstName: "Vlad" })).toEqual(undefined);
			expect(printFullName({ lastName: "Tkach" })).toEqual(undefined);
			expect(printFullName({})).toEqual(undefined);
		});
	});
});
