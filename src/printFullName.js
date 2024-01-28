function printFullName(objeto) {
   if (typeof objeto !== "object"){
   return undefined;
        }
        if (typeof objeto.firstName !== "string" || typeof objeto.lastName !== "string") {
            return undefined;
    }
    return objeto.firstName + " " + objeto.lastName;
}