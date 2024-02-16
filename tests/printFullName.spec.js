// UNCOMMENT THE CODE BELOW TO START
const testObject = {
    "name1": {
        "firstName": "Ben",
        "lastName": "Friedman"
    },
    "name2":{
        "firstName": "Albert",
        "lastName": "Einstein"
    },
    "name3":{
        "firstName": "Angela",
        "lastName": "Merkel"
    },
    "name4":{
        "lastName": "Scholz"
    },
    "name5":{
        "firstName": "Olaf"
    }
    
}


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument of type object. The object should have two properties: firstName and lastName", () => {
            expect(printFullName.length).toBe(1);
        });

        it("should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName(testObject.name1)).toBe("Ben Friedman");
            expect(printFullName(testObject.name2)).toBe("Albert Einstein");
            expect(printFullName(testObject.name3)).toBe("Angela Merkel");
        });

        it("should return undefined in case the argument passed is not an object", () => {
            expect(printFullName(1)).toBe(undefined);
            expect(printFullName("a")).toBe(undefined);
            expect(printFullName(undefined)).toBe(undefined);
            expect(printFullName()).toBe(undefined);

        });

        it("should return undefined, in case the firstName or lastName properties are not provided", () => {
            expect(printFullName(testObject.name4)).toBe(undefined);
            expect(printFullName(testObject.name5)).toBe(undefined);
        });

    })    
})