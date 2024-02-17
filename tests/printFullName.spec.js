// UNCOMMENT THE CODE BELOW TO START

describe('Function - printFullName', () => {

    it('should be defined', () => {
        expect(printFullName).toBeDefined()
    })

    it('should take one argument of type object with firstName and lastName properties', () => {
        expect(printFullName.length).toBe(1)
    });

    it('should return the full name by firstName and lastName with a space', () => {
        expect(printFullName({ firstName: "Mohamed", lastName: "Abdel Nasser" })).toEqual("Mohamed Abdel Nasser")
    });

    it('should return undefined if the argument passed is not an object', () => {
        expect(printFullName('Mohamed Abdel Nasser')).toEqual(undefined);
    });

    it('should return undefined if the firstName or lastName properties are not provided', () => {
        expect(printFullName({})).toEqual(undefined);
    })

})