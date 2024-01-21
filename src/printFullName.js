function printFullName(userData) {
  if (typeof userData !== "object") {
    return undefined;
  }

  if (
    typeof userData.firstName !== "string" ||
    typeof userData.lastName !== "string"
  ) {
    return undefined;
  }
  return `${userData.firstName} ${userData.lastName}`;
}
