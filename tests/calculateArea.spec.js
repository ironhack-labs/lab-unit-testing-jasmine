// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 3', () => {
  describe('Function - calculateArea', () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it('debe de estar definida ', () => {
      expect(calculateArea).toBeDefined()
    })
    it('debe tener dos argumentos', () => {
      expect(calculateArea.length).toBe(2)
    })
    it('debe devolver el area del rectangulos', () => {
      expect(calculateArea(4, 2)).toEqual(8)
      expect(calculateArea(5, 10)).toEqual(50)
      expect(calculateArea(3, 5)).toEqual(15)
    })
    it('debe devolver undefined sin falta algun numero en el arguumento', () => {
      expect(calculateArea(1)).toEqual(undefined)
      expect(calculateArea()).toEqual(undefined)
      expect(calculateArea(5, undefined)).toEqual(undefined)
    })

    it('debe devolver undefined si alguno de los dos argumentos no es un numero', () => {
      expect(calculateArea(1, '6')).toEqual(undefined)
      expect(calculateArea('6', 2)).toEqual(undefined)
      expect(calculateArea('6', '6')).toEqual(undefined)
    })
  })
})
