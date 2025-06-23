
describe("Iteration 3 | Calculate Area", () => {
    describe("Function - calculateArea", () => {
        describe("Function add", () => {
             it("Should be defined", () => {
                expect(calculateArea).toBeDefined();   
             });

             it("Should take 2 numbers as an argument", () => {
                expect(calculateArea.length).toBe(2);
                expect(typeof calculateArea(1,2)).toBe("number")
             })

             it("Should return a number representing the area of a rectangle", () => {
                expect(calculateArea(2,2)).toEqual(4);
                expect(calculateArea(10,4)).toEqual(40);
                expect(calculateArea(3,4)).toEqual(12);
             })

             it("Should return indefined in case any of the arguments is not provided", () => {
                expect(calculateArea(1,undefined)).toEqual(undefined);
                expect(calculateArea(undefined,2)).toEqual(undefined);
                expect(calculateArea()).toEqual(undefined);
             })
        })
        
      

    })    
})