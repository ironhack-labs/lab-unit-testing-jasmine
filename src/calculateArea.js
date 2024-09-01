function calculateArea(numLength,numHeight) {
    if(typeof numLength !== "number" || typeof numHeight !== "number"){
        return undefined
    }else if(numLength === undefined || numHeight === undefined){
        return undefined
    }else{
        return numLength * numHeight;
    }

    
}