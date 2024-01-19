// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        it("The function should be defined", ()=>{
            expect(printFullName).toBeDefined();
        });
        it("should take one argument", ()=>{
            expect(printFullName.length).toEqual(1);
        });
        it("should return the full name of a person when provided with first and last names", ()=>{
            expect(printFullName({ firstName: "Rick"}, {lastName: "Ed"})).toEqual("Rick Ed");
        });
        it("In case the argument passed is not an object, the function should return undefined", ()=>{
            expect(printFullName('Jane')).toBeUndefined();
            expect(printFullName(76)).toBeUndefined();
            expect(printFullName(true)).toBeUndefined();
        });

    })    
})

