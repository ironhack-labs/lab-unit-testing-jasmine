// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 3  | Calculate Area', () => {
	describe('Function - calculateArea', () => {
		// Each `it` block represents 1 test. You can use the following as a template:
		it('should be defined', () => {
			expect(calculateArea).toBeDefined()
		})
		it('should take two arguments', () => {
			expect(calculateArea.length).toBe(2)
		})
		it('should return the total area using two arguments', () => {
			expect(calculateArea(100, 10)).toEqual(1000)
			expect(calculateArea(7, 7)).toEqual(49)
			expect(calculateArea(90, 4)).toEqual(360)
		})
		it('should return undefined if any of the arguments is not provided', () => {
			expect(calculateArea(1)).toEqual(undefined)
			expect(calculateArea()).toEqual(undefined)
			expect(calculateArea(undefined, 1)).toEqual(undefined)
		})
		it('should return undefined if any of the two arguments is not a number', () => {
			expect(calculateArea(1, 'string')).toEqual(undefined)
			expect(calculateArea('string')).toEqual(undefined)
		})
	})
})
