function add(numOne, numTwo) {
	if (
		numOne == undefined ||
		numTwo == undefined ||
		"number" != typeof numOne ||
		"number" != typeof numTwo
	) {
		return undefined;
	}

	return numOne + numTwo;
}
