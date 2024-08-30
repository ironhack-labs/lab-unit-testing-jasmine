function divide (a,b) {
  if(a===undefined || b===undefined){
    return undefined
  }
  let res = a/b
  return res
}

console.log(divide(4,2))
console.log(divide(200,25))
console.log(divide(1,2))