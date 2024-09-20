// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })
})

*/

describe("divide function", () => {
  it('should be define', () => {
    expect(divide).toBeDefined();
  });
  it('should contain two argument', () => {
    expect(divide.length).toBe(2);
  });
  it("should return division of two numbers", () =>{
    expect(divide(2,4)).toEqual(0.5);
    expect(divide(22,2)).toEqual(11);
    expect(divide(100,50)).toEqual(2);
  });
  it("it should return undefined if number has missing", () =>{
    expect(divide(1)).toEqual(undefined);
    expect(divide()).toEqual(undefined);
    expect(divide(undefined,1)).toEqual(undefined);
  });
  it("it should return undefined if there is no numbers", () =>{
    expect(divide(4,"4")).toEqual(undefined);
    expect(divide("4",3)).toEqual(undefined);
    expect(divide("3","50")).toEqual(undefined);
  });
});
