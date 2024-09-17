// UNCOMMENT THE CODE BELOW TO START



//describe("Iteration 3", () => {
    
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("Should take two arguments",()=>{
            expect(calculateArea.length).toBee(2);
        })
        it("Should return the rectangule area by multiplying the two numbers",()=>{
            expect(calculateArea(1,2)).toEqual(2);
            expect(calculateArea(3,4)).toEqual(12);
            expect(calculateArea(6,6)).toEqual(36);

        })
        it("Should return undefined if any of arguments ir not provided",()=>{
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined,1)).toEqual(undefined);

            
        })

        it("Should return undifined if any of the two arguments is not a number", ()=>{
            expect(calculateArea("1", 2)).toEqual(undefined);
            expect(calculateArea(3, "4")).toEqual(undefined);
            expect(calculateArea("100", "47")).toEqual(undefined);


        })    
    })

