function printFullName({ firstName, lastName }) {
  return firstName === undefined || lastName === undefined
    ? undefined
    : `${firstName} ${lastName}`;
}
