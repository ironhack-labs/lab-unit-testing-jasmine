function calculateArea(x,y) {


    if (x == undefined || y == undefined) {
        return undefined;
    }



    if (typeof x!=="number"||typeof y!== "number"){
        return undefined
    }
    return x*y;

   

}


