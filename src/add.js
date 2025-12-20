function add(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return undefined;
  }
  return a + b;
}