// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 2', () => {
  describe('Function - divide', () => {
    it('debe estar definida', () => {
      expect(divide).toBeDefined()
    })

    it('debe tener dos argumentos', () => {
      expect(divide.length).toBe(2)
    })

    it('debe devolver la division de dos números', () => {
      expect(divide(4, 2)).toEqual(2)
    })

    it('debe devolver undefined si falta algún número en el argumento', () => {
      expect(divide(1)).toEqual(undefined)
      expect(divide()).toEqual(undefined)
      expect(divide(5, undefined)).toEqual(undefined)
    })

    it('debe devolver undefined si alguno de los dos argumentos no es un número', () => {
      expect(divide(1, '6')).toEqual(undefined)
      expect(divide('6', 2)).toEqual(undefined)
      expect(divide('6', '6')).toEqual(undefined)
    })
  })
})
