

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should return undefined if any of arguments not number",()=>{
        expect(add('ankit','david')).toEqual(undefined);
          expect(add('a','$')).toEqual(undefined);
            expect(add(undefined,'dgjhhdhc')).toEqual(undefined);
    });
        
it("should return  if any of arguments number",()=>{
        expect(add('ankit','david')).toEqual(undefined);
          expect(add(5,5)).toEqual(1);
            expect(add(undefined,'dgjhhdhc')).toEqual(undefined);
    });
        
    })    
})

