function printFullName(object) {
    if ((typeof object.firstName !== "string" || typeof object.lastName !== "string") || (typeof object !== "object")) {
        return undefined
    }

    return `${object.firstName} ${object.lastName}`
}

console.log(printFullName(1))
printFullName({firstName: "John"})