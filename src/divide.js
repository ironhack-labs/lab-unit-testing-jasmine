let num1 = 30;
let num2 = 5;

function divide (num1,num2) {
    if(num1 === undefined || num2 === undefined) return undefined;
    return num1 / num2;
      
}


let total = divide(num1,num2);
console.log(total);