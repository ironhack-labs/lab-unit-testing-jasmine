// UNCOMMENT THE CODE BELOW TO START

describe('Function - divide', () => {
  it('should be defined', () => {
    expect(divide).toBeDefined();
  });
  it('should take two numbers as arguments', () => {
    expect(divide.length).toBeTrue;
  });

  it('should return the divide of two numbers', () => {
    expect(divide(9, 3)).toEqual(3);
    expect(divide(3, 1)).toEqual(3);
    expect(divide(30, 10)).toEqual(3);
  });

  it('should return undefined if any of the arguments is not provided', () => {
    expect(divide(1)).toEqual(undefined);
    expect(divide()).toEqual(undefined);
    expect(divide(undefined, 1)).toEqual(undefined);
  });
  it('should return undefined if any of the two arguments is not a number', () => {
    expect(divide('2', 2)).toEqual(undefined);
    expect(divide(2, '2')).toEqual(undefined);
    expect(divide('2', '2')).toEqual(undefined);
  });
});
