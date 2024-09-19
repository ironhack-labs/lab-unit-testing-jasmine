function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined || typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }

    return Number(numOne) + Number(numTwo);
}

function findUnique(wordsArr) {
    const wordCount = {};
  
    for (const word of wordsArr) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  
    return wordsArr.find(word => wordCount[word] === 1);
  }