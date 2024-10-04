// UNCOMMENT THE CODE BELOW TO START

//
//  (the product of the two arguments).
// .

describe('Iteration 3', () => {
  describe('Function - calculateArea', () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it('The function should be defined.', () => {
      expect(calculateArea).toBeDefined()
    })
    it('The function should take two numbers as arguments', () => {
      expect(calculateArea.length).toEqual(2)
    })
    it('The function should return a number representing the area of a rectangle', () => {
      expect(calculateArea(2, 3)).toEqual(6)
      expect(calculateArea(1.5, 2)).toEqual(3)
      expect(calculateArea(12, 1)).toEqual(12)
      expect(calculateArea(0.3, 0.3)).toEqual(0.09)
    })
    it('In case any of the arguments is not provided, the function should return undefined', () => {
      expect(calculateArea('8', 2)).toEqual(undefined)
      expect(calculateArea(4, '2')).toEqual(undefined)
      expect(calculateArea('3', '2')).toEqual(undefined)
    })
  })
})
