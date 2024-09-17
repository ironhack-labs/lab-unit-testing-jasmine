// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
     
    it ("The function should be defined.",() =>{
        expect(divide).toBeDefined();

    })   
    it ("The function should take two numbers as arguments.",() =>{
       expect(divide.length).toBe(2); 
    }) 
    it ("The function should return the division of the two numbers",() =>{
        expect(divide(4, 2)).toEqual(2);
        expect(divide(15, 5)).toEqual(3);
        expect(divide(120, 30)).toEqual(4);
        
    }) 
    it ("The function should return undefined if any of the arguments is not provided",() =>{
        expect(divide(4)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(add(undefined, 5)).toEqual(undefined);
        
    }) 
  
})

