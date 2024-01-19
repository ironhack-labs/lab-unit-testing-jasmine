function sumArrayNumbers(array) {
  if (typeof array !== "object") return undefined;
  if (!array.length && array.length !== 0) return undefined;

  let answer = 0;

  array.forEach((element) => {
    answer += element;
  });

  return answer;
}
