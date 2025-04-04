function divide (a, b) {
    if (a == undefined || b == undefined) {
        return undefined;
    }
    if (typeof a != "number" || typeof b != "number") {
        return undefined;
    }

    console.log(a / b);
    return a / b;
}

