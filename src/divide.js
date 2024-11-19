function divide (a,b) {
    if (a === undefined || b === undefined) {
        return undefined;
    }
    return a / b;
}


describe("divide", function() {
    it("should be defined", function() {
        expect(divide).toBeDefined();
    });

    it("should return the division of two numbers", function() {
        expect(divide(6, 3)).toBe(2);
    });

    it("should return undefined if any argument is missing", function() {
        expect(divide(6)).toBeUndefined();
        expect(divide(undefined, 3)).toBeUndefined();
    });
});
       
