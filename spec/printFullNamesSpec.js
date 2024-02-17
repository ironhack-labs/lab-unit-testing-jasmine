describe("4) Function printFullName" , () => {
    it("should be defined", () => {
        expect(printFullName).toBeDefined()
    })

    it("should take one argument as an object, with two properties, firstName and lastName", () => {
        expect(printFullName.length).toBe(1);
    })

    it("should  return a string with the first name and the last name separated by a space.", () => {
        expect(printFullName({ firstName: "Jorge", lastName:"Esquiva" })).toEqual("Jorge Esquiva");
        expect(printFullName({firstName: "Adrian", lastName: "Pinol"})).toEqual("Adrian Pinol");
    })

    it("should return undefined wig the argument passes is not an object", () => {
        expect(printFullName("Jorge Esquiva")).toEqual(undefined);
        expect(printFullName(123)).toEqual(undefined);
        expect(printFullName(true)).toEqual(undefined);
    })
    it("should return undefined if firstName or lastName are missing", () => {
        expect(printFullName({firstName: "Jorge", lastName: undefined})).toEqual(undefined);
        expect(printFullName({firstName: undefined, lastName: "Esquiva"})).toEqual(undefined);
        expect(printFullName({})).toEqual(undefined);
    })
    it("should return undefined if firstName or lastName are not strings", () => {

    expect( printFullName({ firstName: 1231, LastName: "Esquiva" })).toEqual(undefined); 
    expect( printFullName({ firstName: "Jorge", lastName: 1 }) ).toEqual(undefined);
    expect( printFullName({ firstName: 1231, LastName: 1 }) ).toEqual(undefined);
        
        });
        
        });