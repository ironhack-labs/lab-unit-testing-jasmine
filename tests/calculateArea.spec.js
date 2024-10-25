// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 3', () => {
	describe('Function - calculateArea', () => {
		// Each `it` block represents 1 test. You can use the following as a template:
		it('should be defined', () => {
			expect(calculateArea).toBeDefined();
		});

		it('should be a function and be declared', () => {
			expect(typeof calculateArea).toBe('function');
		});

		it('should take two arguments', () => {
			expect(calculateArea.length).toBe(2);
		});

		it('should multiply both arguments correctly', () => {
			expect(calculateArea(4, 2)).toBe(8);
			expect(calculateArea(1_000, 200)).toBe(200_000);
			expect(calculateArea(9, 3)).toBe(27);
			expect(calculateArea(0, 3)).toBe(0);
		});

		it('should return undefined on non-numbered arguments', () => {
			expect(calculateArea('string', 2)).toBeUndefined();
			expect(calculateArea('15', 2)).toBeUndefined();
		});
	});
});
