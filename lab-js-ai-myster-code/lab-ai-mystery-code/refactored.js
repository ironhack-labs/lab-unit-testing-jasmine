// The loop is supposed to confirm if a number in the loop is even or odd. If it is even, it should return true and if it is odd, it should return false.

function mystery1(arr) {
  let i = 0;
  while (i < arr.length){
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++ //I added the i++, because the loop would never go further, since it will be stuck at 0. There is no increment coded into it and i need to do it after it passes through the first number, so after the first return if the conditions are not met.
}
  return false;
}

//-----------------------------------------------------------
//The function is named q and has an argument named q. There is not really a context to this function, but what it is essentially is splits the string (the argument) into seperate characters, but since it has only 1 character, it does not change. Now it is reversing the single characters and spells it backwards and compareds the end product of the backwards word with the orignal output. The function is to the if the argument has the same value forwards as backwards.

function q(q){
    return q.split('').reverse().join('')==q
}

// Fixes: 
// 1.Seperate { and }
// 2. Space out commands for better readability (optional)
// 3. Name what the function does
// 4. Argument should have a word of some kind, not a single letter for better comparison
function isMirrored(word) {
  return word.split('').reverse().join('') === word;
}


//--------------------------------------------------------
// This is a loop, where the x takes the value of a and y takes the value of b. The loop counts upwards. a is the starter and b is the amount of times b runs. Each run the variable x gets an addition of 1. Since Y has not been used in the function, the y = y - 1 does not influence anything

function complicatedCalc(a,b){
    return a + b
}