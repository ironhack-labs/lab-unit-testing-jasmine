// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(sumArrayNumbers).toBeDefined();
        });
        it("The function should take one argument of type array. The array should contain numbers.", () => {
            let array = [1, 2, 3];
            expect(Array.isArray(array)).toBe(true); // Check if it's an array
            array.forEach(element  => {
                expect(typeof element).toBe("number")
            })

        });
        it("The function should return the sum of all numbers in the array.", () => {
            let array = [1, 2, 3];
            let sum = 0
            array.forEach(element => {
                sum += element    
            });
            expect(sum).toBe(6)
        });
        // it("In case the argument passed is not an array, the function should return undefined.", () => {
        //     let array = "string";
        //     expect(sumArrayNumbers(array)).toBe(undefined); // Check if it's an array
        // });
        // it("In case the argument passed is an empty array, the function should return 0.", () => {});

    })    
})

