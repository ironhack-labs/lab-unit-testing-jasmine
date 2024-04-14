function divide (num1, num2) {
 
  if (num1 == undefined || num2 == undefined) {
    return undefined;
  }
  if ( typeof num1 == "string" ||  typeof num2 == "string") {
    return undefined;
  }
  if ( typeof num1 !=="number" || typeof num2 !== "number") {
    return undefined;
  }
  if (num1 === null || num2 === null) {
    return null;
  }
  return num1/num2;
}



describe("function divide", function () {
    it("1. Deberia dividir dos numeros", function() {
      expect(divide(6,2)).toBe(3)
      expect(divide(24,2)).toBe(12)
      expect(divide(25,5)).toBe(5)
    })
  })
  
  describe("function divide", function () {
    it("2. Si recibo un string, deberia retornar undefined", function() {
      expect(divide("patata")).toBe(undefined)
    })
  })
  
  describe("function divide", function () {
    it("3. Si no recibo nada", function() {
      expect(divide()).toBe(undefined)
    })
  })
  describe("function divide", function () {
    it("4. Si recibe algo que no sea numero, deberia retornar null", function() {
      expect(divide([])).toBe(null)
      expect(divide(true)).toBe(null)
    })
  })
