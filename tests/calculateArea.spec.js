// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })
})

*/
describe("area function", () => {
  it('should be define', () => {
    expect(calculateArea).toBeDefined();
  });
  it('should contain two argument', () => {
    expect(calculateArea.length).toBe(2);
  });
  it("should return division of two numbers", () =>{
    expect(calculateArea(2,4)).toEqual(8);
    expect(calculateArea(22,2)).toEqual(44);
    expect(calculateArea(100,50)).toEqual(5000);
  });
  it("it should return undefined if number has missing", () =>{
    expect(calculateArea(4)).toEqual(undefined);
    expect(calculateArea()).toEqual(undefined);
    expect(calculateArea(undefined,50)).toEqual(undefined);
  });
  it("it should return undefined if there is no numbers", () =>{
    expect(calculateArea(4,"4")).toEqual(undefined);
    expect(calculateArea("4",3)).toEqual(undefined);
    expect(calculateArea("3","50")).toEqual(undefined);
  });
})
