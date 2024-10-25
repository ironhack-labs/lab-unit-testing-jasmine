// iteration 1.9
function add(numOne, numTwo) {
	// iteration 1.8
	const hasNaN = isNaN(numOne) || isNaN(numTwo);
	const hasUndefined = numOne == undefined || numTwo == undefined;

	if (hasNaN || hasUndefined) return undefined;

	return numOne + numTwo;
}
