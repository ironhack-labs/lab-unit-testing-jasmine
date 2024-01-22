const obj = {
	firstName: "Vlad",
	lastName: "Tkach",
};

function printFullName(obj) {
	if (typeof obj !== "object") {
		return undefined;
	}
	if (typeof obj.firstName !== "string" || typeof obj.lastName !== "string") {
		return undefined;
	}
	return obj.firstName + " " + obj.lastName;
}
console.log(printFullName(obj));