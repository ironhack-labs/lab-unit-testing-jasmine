function sumArrayNumbers(array) {
	if (!Array.isArray(array)) {
		return undefined;
	}

	if (!array.every(element => typeof element === 'number')) {
		return undefined;
	}

	if (array.length === 0) {
		return 0; 
	}

	let result = 0;
	array.forEach(element => {
		result += element;
	});

	return result;
}
