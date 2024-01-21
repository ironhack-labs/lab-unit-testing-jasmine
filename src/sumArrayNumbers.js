function sumArrayNumbers(arr) {

    if(arr.length === 0){
        return 0;
    } 

    if( !(Array.isArray (arr))){
        return undefined;
    }

    let sumOfArr = 0;

    for ( let i=0; i<arr.length; i++){
        sumOfArr += arr[i];
    }

    return sumOfArr;

}