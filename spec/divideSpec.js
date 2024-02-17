describe ("2) Function divide",() =>{
    it("should be defined" , () => {
        expect(divide).toBeDefined();
    })

    it("should to take two arguments as number", () => {
        expect(divide.length).toBe(2);
        expect(divide("2", "3")).toEqual(undefined);
        expect(divide(true, false)).toEqual(undefined);
    })

    it("should to return the division of the two numbers", () => {
        expect(divide(2, 2)).toEqual(1);
        expect(divide(8, 2)).toEqual(4);
        expect(divide(1000, 2)).toEqual(500);

   });

   it("should return undefined if one of the arguments is not provided", () => {
        expect(divide(1, )).toEqual(undefined);
        expect(divide(5)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
   })
});

