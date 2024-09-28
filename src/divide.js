function divide(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 / num2;
	} else if (num1 === undefined || num2 === undefined) {
		return undefined;
	}
}
