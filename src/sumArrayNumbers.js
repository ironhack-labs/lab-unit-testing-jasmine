function sumArrayNumbers(numbers) {
    if(!Array.isArray(numbers)){
       return "undefined"
    }else if(!numbers.length){
        return 0;
    }else if(!numbers.every(number =>{
        typeof number === "number"; 
    })){
        return "undefined";
    }
    else{
        return numbers.reduce((total,current)=>{
            return total + current;
        },0);
    }

}
console.log(sumArrayNumbers([1,2,3]));