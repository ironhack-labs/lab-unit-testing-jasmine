describe("Iteration 2: divide", () => {
        
        it("should be defined", () => {
    expect (divide).toBeDefined();
});

    it ("should take two numbers as arguments", () => {
        expect (divide.length).toBe(2);
    });

    it ("should return the devision of the two numbers", ()=> {
        expect (divide (1,2)).toEqual(0.5);
        expect (divide(3,4)).toEqual(0.75);
        expect (divide (100,50)).toEqual(2);
    });

    it ("should return undefined if arguments are not provided", () => {
        expect (divide(1)).toEqual(undefined);
        expect (divide()).toEqual(undefined);
        expect (divide(undefined,1)).toEqual(undefined);
    });

    it ("should return undefined if arguments are not a number", () => {
        expect (divide(1,"2")).toEqual(undefined);
        expect (divide("3", 4)).toEqual(undefined);
        expect (divide("100", "47")).toEqual(undefined);
})  
})