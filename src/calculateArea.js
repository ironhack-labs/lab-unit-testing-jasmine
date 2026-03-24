function calculateArea(length, width) {
   return length * width; 
}

if (typeof module !== "undefined"){
    module.exports = calculateArea;
}
