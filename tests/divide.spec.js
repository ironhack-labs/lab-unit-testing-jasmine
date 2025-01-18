// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("The function should be defined.", () => {
            expect(divide).toBeDefined();
        });
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of two numbers",()=>{
            expect(divide(10,2)).toBe(5);
            expect(divide(2,2)).toBe(1);
            expect(divide(9,2)).toBe(4.5);
        })

        it("shuld return undefind if any of the arguments is not providied", ()=>{
            expect(divide()).toBeUndefined();
            expect(divide("a",2))== undefined;
            expect(divide(2,"2"))== undefined;
        })

    })    
})