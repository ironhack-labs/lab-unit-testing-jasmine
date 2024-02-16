function sumArrayNumbers(arrayNumber) {
	let initial = 0;

	if (Array.isArray(arrayNumber)) {
		const sum = arrayNumber.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initial
		);

		return sum;
	}

	return undefined;
}
