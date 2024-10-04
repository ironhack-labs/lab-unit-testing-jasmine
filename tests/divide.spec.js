// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 2', () => {
  describe('Function - divide', () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it('should be defined', () => {
      expect(divide).toBeDefined()
    })
    it('should take two argumants', () => {
      expect(divide.length).toBe(2)
    })
    it(' should return the division of the two numbers', () => {
      expect(divide(8, 2)).toEqual(4)
      expect(divide(4, 2)).toEqual(2)
      expect(divide(3, 2)).toEqual(1.5)
    })
    it('should return undefined when dividing by 0', () => {
      expect(divide(4, 0)).toBeUndefined()
    })
    it(' should return undefined if any of the arguments is not provided', () => {
      expect(divide('8', 2)).toEqual(undefined)
      expect(divide(4, '2')).toEqual(undefined)
      expect(divide('3', '2')).toEqual(undefined)
    })
  })
})
