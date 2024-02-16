function calculateArea(num1, num2) {
	if ("number" != typeof num1 || "number" != typeof num2) {
		return undefined;
	}
	return num1 * num2;
}
