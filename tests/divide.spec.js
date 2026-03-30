// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined ", () => {
            expects(divide).toBeDefined();

        });

        it("Should take two numbers as arguments ", ()=> {
         expects(divide.length).toBe(2); 
        })

        it("should return the division of the two numbers", ()=>{ expects(divide(4,2)).toEqual(2);

        })

        it("Should return `undefined` if any of the arguments is not provided", ()=>{
         expects(divide(5)).toEqual("undefined")

        })

    })    
})

