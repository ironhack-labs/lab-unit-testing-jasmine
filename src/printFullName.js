function printFullName(objectNames) {
    if (typeof objectNames !== "object" || !Object.keys(objectNames).includes("firstName") || !Object.keys(objectNames).includes("lastName")) {
        return undefined;
    }

    return `${objectNames.firstName} ${objectNames.lastName}`
}