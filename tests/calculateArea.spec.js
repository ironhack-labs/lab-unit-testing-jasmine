// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("Should take two arguments", () => {
            expect(calculateArea.lenght).toBe(2);

            it("Should return the rectangle area by multiplying the two numbers", () => {
                expect(calculateArea(1,2)).toEqual(2);
                expect(calculateArea(10,20)).toEqual(200));
                expect(calculateArea(5,5)).toEqual(25);

                it("Should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(2)).toEqual(undefined);
    expect(calculateArea()).toEqual(undefined));
    expect(calculateArea(undefined,5)).toEqual(undefined);


    it("Should return undefined if any of the arguments is not a number", () => {
        expect(calculateArea(2,"3")).toEqual(undefined);
        expect(calculateArea("3",2)).toEqual(undefined));
        expect(calculateArea("3","4")).toEqual(undefined);
})}) }) 