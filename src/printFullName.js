function printFullName(obj) {
  if (typeof obj !== "object") {
    return undefined;
  }

  const { firstName, lastName } = obj;

  console.log(firstName, lastName);
  console.log(obj);

  if (!firstName || !lastName) {
    return undefined;
  }

  return `${firstName} ${lastName}`;
}
