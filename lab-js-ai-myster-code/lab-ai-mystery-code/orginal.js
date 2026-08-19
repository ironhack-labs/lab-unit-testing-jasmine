//This is the same function from before — same bug.

//What's wrong: i is never incremented inside the loop. If arr[i] isn't even, the code just loops back to the same while check with i unchanged — forever. It's an infinite loop for any array that doesn't have an even number right at whatever index you're stuck on.

//The fix: add i++ inside the loop, after the if check (so it only runs when you haven't already returned):


//*function mystery1(arr) {
  //let i = 0;
  //while (i < arr.length) {
   // if (arr[i] % 2 === 0) {
   //   return true;
  //  }
   // i++;
 // }
  //return false;
//}

//Now each pass through the loop either returns true (found an even number) or moves on to check the next index — and once i reaches arr.length, it exits and returns false.

//  ### Case 2 : The Cryptic Function 

//Let's break down function q(q){return q.split('').reverse().join('')==q}.

//Step-by-step:

//q.split('') — takes the string and splits it into an array of individual characters. E.g., "level" → ['l', 'e', 'v', 'e', 'l']
//.reverse() — reverses that array. ['l', 'e', 'v', 'e', 'l'] → ['l', 'e', 'v', 'e', 'l'] (same here since it's a palindrome, but for "hello" → ['o', 'l', 'l', 'e', 'h'])
//.join('') — joins the array back into a single string with no separator. ['o', 'l', 'l', 'e', 'h'] → "olleh"
//== q — compares that reversed string to the original input q. If they're identical, the string reads the same forwards and backwards.

//So the function returns true if the input is a palindrome, false otherwise.

//Example:

//q("level") → true
//q("hello") → false

//Why the naming is bad:

//The function is named q and its parameter is also named q //— that's confusing and pointless. The parameter shadows //the function name inside its own body, and neither name //gives any hint about what the function does.

//Better version:

//js
//function isPalindrome(str) {
  //return str.split('').reverse().join('') === str;
//}
//Changes:

// q (function) → isPalindrome — describes what it checks, and reads naturally at the call site: isPalindrome("level")
//q (parameter) → str — signals it's expecting a string
//== → === — strict equality avoids unexpected type //coercion, good habit even though it doesn't change behavior here since both sides are already strings 