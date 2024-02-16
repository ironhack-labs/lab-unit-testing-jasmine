const fullNameObject = {
  firstName: "john",
  lastName: "snow",
};
function printFullName(fullNameObject) {
  if (typeof fullNameObject !== "object") {
    return undefined;
  }
  if (
    typeof fullNameObject.firstName !== "string" ||
    typeof fullNameObject.lastName !== "string"
  ) {
    return undefined;
  }
  console.log(fullNameObject.firstName + " " + fullNameObject.lastName);
  return fullNameObject.firstName + " " + fullNameObject.lastName;
}
