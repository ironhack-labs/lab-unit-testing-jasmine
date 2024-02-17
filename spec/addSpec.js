describe("1) Function add", () => {
    it("should be defined", () => {
        expect(add).toBeDefined();
    });

    it("should take two arguments", () => {
        expect(add.length).toBe(2);
    });

    it("should return the sum of the two numbers", () => {
        expect(add(1, 1)).toEqual(2);
        expect(add(4, 4)).toEqual(8);
        expect(add(40, 90)).toEqual(130);
    });

    it("should be undefined if any of the arguments is not provided", () => {
        expect(add(4)).toEqual(undefined);
        expect(add(undefined, 9)).toEqual(undefined);
        expect(add()).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
        expect(add(5, "J")).toEqual(undefined);
        expect(add("O", 0)).toEqual(undefined);
        expect(add("30", '90')).toEqual(undefined);
    });
});


