function divide () {
       work
}

function divide(a, b) {
       if (a === undefined || b === undefined) {
           return undefined;
       }
       
       if (typeof a !== 'number' || typeof b !== 'number') {
           return undefined;
       }
       
       return a / b;
   }