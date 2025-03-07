function divide(n1, n2) {
    if (n1 == undefined || n2 == undefined) {
      return undefined;
    }
    if (n1 == undefined && n2 == undefined) {
      return undefined;
    }
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      return undefined;
    }
    return n1 / n2;
  }