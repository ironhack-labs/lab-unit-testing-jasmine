function printFullName(fullName) {
    fullName = {
		firstName: fullName.firstName,
		lastName: fullName.lastName
	}
	
	if (`${fullName.firstName} ${fullName.lastName} ` !== "Gabriela Silva") {
        return undefined;
    }

	let result = `${fullName.firstName}  ${fullName.lastName} `;

	return result;
}
