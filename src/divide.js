function divide (numOne, numTwo) {
	if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    if (numOne == "" || numTwo == "") {
        return undefined;
    }

    return numOne / numTwo;
}