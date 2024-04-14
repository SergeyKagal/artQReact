export function randomizer() {
  const arr = new Set();
  while (arr.size < 10) {
    arr.add(Math.floor(Math.random() * 10));
  }
  return Array.from(arr);
}
