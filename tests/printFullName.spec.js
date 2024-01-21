// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined.", () => {
      expect(printFullName).toBeDefined();
    });

    it("The function should take one argument of type object. The object should have two properties: firstName and lastName", () => {
      var myObject = { firstName: "John", lastName: "Doe" };
      expect(Object.keys(myObject)).toEqual(["firstName", "lastName"]);
    });

    it("The function should return a string with the first name and the last name separated by a space", () => {
      let myObject1 = { firstName: "Jane", lastName: "Doe" };
      expect(printFullName(myObject1)).toEqual(
        `${myObject1.firstName} ${myObject1.lastName}`
      );

      let myObject2 = { firstName: "Cat", lastName: "Stevens" };
      expect(printFullName(myObject2)).toEqual(
        `${myObject2.firstName} ${myObject2.lastName}`
      );
    });

    it("In case the argument passed is not an object, the function should return undefined", () => {
      expect(printFullName({})).toBeUndefined();
    });

    it("In case the firstName or lastName properties are not provided, the function should return undefined", () => {
      expect(printFullName({ firstName: "John" })).toBeUndefined();
      expect(printFullName({ lastName: "Doe" })).toBeUndefined();
    });
  });
});
