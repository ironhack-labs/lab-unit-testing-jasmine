// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("Should take two parameters", () => {
            expect(divide.length).toBe(2);
        } )

        it("Should return the division of the two numbers", () => {
            expect( divide(1,2).toEqual(0.5));
            expect( divide(3,4).toEqual(0.75));
            expect( divide(100,50).toEqual(2));
        })

        it("Should return undefined if any of the parameters is not provided", () => {
            expect(divide(1).toEqual(undefined));
            except(divide().toEqual(undefined));
            except( divide(undefined,1).toEqual(undefined));
        })

        it("Should return undefined if any of the parameters is not provided ", () => {
            expect(divide(1,"2").toEqual(undefined));
            except(divide("3",4).toEqual(undefined));
            except( divide("100","47").toEqual(undefined));
        })
    })    
})

