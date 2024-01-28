// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument", () => {
            expect(printFullName.length).toBe(1);
         }); 

         it("should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({firstName: "Frodo", lastName: "Bolson"})).toEqual("Frodo Bolson");
            expect(printFullName({firstName: "Peter", lastName: "Parker"})).toEqual("Peter Parker");
         });

         it("In case the argument passed is not an object, the function should return undefined", () => {
            expect(printFullName("Sheldon Cooper")).toEqual(undefined);
            expect(printFullName(23)).toEqual(undefined);
            expect(printFullName(false)).toEqual(undefined);
         });

         it("In case the firstName or lastName properties are not provided, the function should return undefined", () => {
            expect(printFullName({firstName: "Legolas"})).toEqual(undefined);
            expect(printFullName({lastName: "Skywalker"})).toEqual(undefined);
         });
    })    
})

