// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        })
        it("should return the division of the two numbers", () => {
            expect(divide(5,4)).toEqual(1.25)
            expect(divide(245, 2)).toEqual(122.50);
            expect(divide(0.75, 3)).toEqual(0.25)
        })
        it("should return undefined if any of the arguments is not number", () => {
            expect(divide( true, "1")).toEqual(undefined);
            expect(divide("ALi", 34)).toEqual(undefined);
            expect(divide("12", "15")).toEqual(undefined);
        })
        it("should return undefined if any of the arguments is not provider", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(3)).toEqual(undefined);
            expect(divide("",5)).toEqual(undefined);
        })
        it("shoud return undefind if second arguments is zero", () => {
            expect(divide(3,0)).toEqual(undefined);
        })

    })    
})

