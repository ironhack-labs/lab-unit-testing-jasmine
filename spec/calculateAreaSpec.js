describe ("3) Function calculateArea", () => {
    it("should be defined", () => {
        expect(calculateArea).toBeDefined();
    })

    it("should to take two arguments as number", () => {
        expect(divide.length).toBe(2);
        expect(divide("2", "3")).toEqual(undefined);
        expect(divide(true, false)).toEqual(undefined);
    });

    it("should to return a number representing the area of rectangle", () => {
        expect(calculateArea(2,8)).toEqual(8);
        expect(calculateArea(5,10)).toEqual(25);
        expect(calculateArea(10,10)).toEqual(50);
        
    })
    it("if any of the arguments is not provide , should return undefined", () => {
        expect(calculateArea(3)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 4)).toEqual(undefined);
    })
});
