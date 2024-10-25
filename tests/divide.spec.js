// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 2', () => {
	describe('Function - divide', () => {
		// Each `it` block represents 1 test. You can use the following as a template:
		it('should be defined', () => {
			expect(divide).toBeDefined();
		});

		it('should be a function and be declared', () => {
			expect(typeof divide).toBe('function');
		});

		it('should take two arguments', () => {
			expect(divide.length).toBe(2);
		});

		it('should divide two non-zero numbers correctly', () => {
			expect(divide(4, 2)).toBe(2);
			expect(divide(1000, 200)).toBe(5);
			expect(divide(9, 3)).toBe(3);
			expect(divide(0, 3)).toBe(0);
		});

		it('should return Infinity if divisor is 0', () => {
			expect(divide(9, 0)).toBe(Infinity);
		});

		it('should return 0 if any argument is not of type number', () => {
			expect(divide(9, 'a')).toBe(0);
			expect(divide('str', 'a')).toBe(0);
			expect(divide(() => {}, 'a')).toBe(0);
			expect(divide({}, 'a')).toBe(0);
			expect(divide([1, 2], 'a')).toBe(0);
		});
	});
});
