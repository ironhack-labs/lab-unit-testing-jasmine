describe("5) Function sumArrayNumbers", () => {
    it("should be defined", () => { 
    expect(sumArrayNumbers).toBeDefined();
    });

    it("should take one argument", () => { 
    expect(sumArrayNumbers.length).toBe(1);
    
    });
    
    it("should return the sum of all numbers in the array", () => { 
    expect( sumArrayNumbers([1, 2, 3]) ).toEqual(6);
    expect( sumArrayNumbers([1, 2, 5]) ).toEqual(8);
    expect( sumArrayNumbers([10, 222]) ).toEqual(232)
    });
    
    it("should return undefined if the argument passed is not an array", () => {
    expect( sumArrayNumbers (123) ).toEqual(undefined); 
    expect( sumArrayNumbers("8")).toEqual(undefined);
    expect( sumArrayNumbers({})).toEqual(undefined);
    
    });
    
    it("should return 0 if the argument passed is an empty array", () => { 
        expect( sumArrayNumbers([])).toEqual(0);
    });
    
    });
