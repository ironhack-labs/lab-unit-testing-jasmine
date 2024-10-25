describe('Iteration 1 | Getting Started', () => {
	describe('Function add', () => {
		it('should be defined', () => {
			expect(add).toBeDefined();
		});

		it('should take two arguments', () => {
			expect(add.length).toBe(2);
		});

		it('should return the sum of the two numbers', () => {
			expect(add(1, 2)).toEqual(3);
			expect(add(3, 4)).toEqual(7);
			expect(add(100, 47)).toEqual(147);
		});

		it('should return undefined if any of the arguments is not provided', () => {
			expect(add(1)).toEqual(undefined);
			expect(add()).toEqual(undefined);
			expect(add(undefined, 1)).toEqual(undefined);
		});

		// iteration 1.6
		it('returns `undefined` if any argument is not a number', () => {
			expect(add(NaN, 2)).toBeUndefined();
			expect(add(NaN, NaN)).toBeUndefined();
			expect(add(-3, NaN)).toBeUndefined();
			expect(add(NaN)).toBeUndefined();
		});

		// iteration 1.7
		// looking good ✔
	});
});

// iteration 1.1
// 8 tests

// iteration 1.2
// it() is used to group tests to one specification of the test object
// describe() is used to group the underlying specifications

// iteration 1.3
// it should be completely human readable, e.g.
// IT should do something
// IT has certain properties
// IT returns a certain value

// iteration 1.4
// expect() are the actual tests and you can pass them the function

// iteration 1.5
// review complete ✔
