const goodObject1 = {
    firstName : "Hugo",
    lastName : "Maurin"
}

const goodObject2 = {
    firstName : "Iron",
    lastName : "Hack"
}

const badObject1 = {
    firstName : "Toto",
}

const badObject2 = {
    lastName : "Tata",
}

const badObject3 = {}

describe("Bonus: Iteration 4 | Print Full Name", () => {
    describe("Function - printFullName", () => {
      it("should be defined", () => {
        expect(printFullName).toBeDefined();
      });
  
      it("should take one argument of type object.", () => {
        expect(printFullName.length).toBe(1);
        expect(printFullName("lala")).toEqual(undefined);
        expect(printFullName(5)).toEqual(undefined);
      });
  
      it("should have two properties: firstName and lastName", () => {
        expect(printFullName(badObject1)).toEqual(undefined);
        expect(printFullName(badObject2)).toEqual(undefined);
        expect(printFullName(badObject3)).toEqual(undefined);
      });
  
      it("should return a string with the first name and the last name separated by a space", () => {
        expect(printFullName(goodObject1)).toEqual("Hugo Maurin");
        expect(printFullName(goodObject2)).toEqual("Iron Hack");
      });
    });
  });
  