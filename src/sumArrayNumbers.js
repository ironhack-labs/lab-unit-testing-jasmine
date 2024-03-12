function sumArrayNumbers(numberArray) {
    if(!Array.isArray(numberArray)){
        return undefined;
    }
    let check = true;
    numberArray.forEach(element => {
        if(typeof element != "number"){
            check = false;
            
        }
        
    });
    if(!check){
        return undefined;
    }

    let sum = 0;

    numberArray.forEach(element =>{
        sum = sum + element;
    });

    return sum;




}function sumArrayNumbers(numberArray) {
    if(!Array.isArray(numberArray)){
        return undefined;
    }
    let check = true;
    numberArray.forEach(element => {
        if(typeof element != "number"){
            check = false;
            
        }
        
    });
    if(!check){
        return undefined;
    }

    let sum = 0;

    numberArray.forEach(element =>{
        sum = sum + element;
    });

    return sum;




}