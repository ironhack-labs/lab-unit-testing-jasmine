function calculateArea(width, height) {
	if (typeof width === "number" && typeof height === "number") {
		return width * height;
	} else if (width === undefined || height === undefined) {
		return undefined;
	}
}
