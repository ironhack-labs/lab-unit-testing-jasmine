// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(printFullName).toBeDefined();
        });

        it("The function should take one argument of type object. The object should have two properties: firstName and lastName.", () => {
            expect(printFullName({ firstName: "firstName", })).toEqual(undefined);
            expect(printFullName({ lastName:"lastName", })).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
        });

        it("The function should return a string with the first name and the last name separated by a space.", () => {
            expect(printFullName({ firstName: "firstName" , lastName:"lastName" })).toEqual("firstName lastName");
            expect(printFullName({ firstName: "testName" , lastName:"assessName" })).toEqual("testName assessName");
        });

        it("In case the argument passed is not an object, the function should return undefined.", () => {
            expect(printFullName("Daniel Costa")).toEqual(undefined);
            expect(printFullName(123)).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined);

        });

        it("In case the firstName or lastName properties are not provided, the function should return undefined.", () => {
            expect(printFullName({firstName: "Daniel", lastName:123})).toEqual(undefined);
            expect(printFullName({firstName: 123, lastName:"Costa"})).toEqual(undefined);
            expect(printFullName({firstName: 123, lastName:123})).toEqual(undefined);
        });

    })    
})





/* 







*/