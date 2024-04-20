export function getVariants(rightNum) {
  const set = new Set();
  while (set.size < 4) {
    set.add(Math.floor(Math.random() * 119));
  }
  const res = Array.from(set);
  res[Math.floor(Math.random() * 4)] = rightNum;
  console.log(res);
  return res;
}
