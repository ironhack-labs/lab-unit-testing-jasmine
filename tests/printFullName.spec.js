// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        it("Function should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument of type object", () => {
            expect(printFullName.length).toBe(1);
        })

        it("The object should have two properties: firstName and lastName", () => {
            expect(printFullName({ firstName: "Costa", lastName: "Man" }) ).toEqual("Costa Man");
        })

        it("should return undefined in case the argument is not an object", () => {
            expect(printFullName("CostaMan")).toEqual(undefined);
            expect(printFullName(50)).toEqual(undefined);
            expect(printFullName()).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined)
        })

        it("the function should return undefined in case the firstName or lastName properties are not provided", () => {
            expect(printFullName({firstName: "Kosta"})).toEqual(undefined);
            expect(printFullName({lastName: "Man"})).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
            
        })
   


    })    
})
