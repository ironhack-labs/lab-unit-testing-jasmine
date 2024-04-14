function calculateArea(num1, num2) {
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
 return num1*num2
}

describe("function calculateArea", function () {
  it("1. Deberia multiplicar dos numeros", function () {
    expect(calculateArea(2, 3)).toBe(6);
    expect(calculateArea(5, 5)).toBe(25);
    expect(calculateArea(4, 2)).toBe(8);
  });
});

describe("function calculateArea", function () {
  it("2. Si recibo un string, deberia retornar undefined", function () {
    expect(calculateArea("patata")).toBe(undefined);
  });
});

describe("function calculateArea", function () {
  it("3. Si no recibo nada, deberia retornar ", function () {
    expect(calculateArea()).toBe(undefined);
  });
});

describe("function calculateArea", function () {
  it("4. Si recibe algo que no sea numero, deberia retornar null", function () {
    expect(calculateArea([])).toBe(null);
    expect(calculateArea(true)).toBe(null);
  });
});
