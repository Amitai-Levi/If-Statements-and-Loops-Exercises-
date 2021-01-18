let total = 0;
let count = 0;
let current = 0;
let dig1 = 0;
let dig2 = 0;
console.log("hi");
while (total < 5) {
  current = count;
  dig2 = 0;
  while (current > 10) {
    while (current > 0) {
      dig1 = current % 10;
      dig2 += dig1 * dig1;
      current = (current - dig1) / 10;
    }
    current = dig2;
  }
  if (dig2 === 1) {
    console.log(count);
    total++;
  }
  count++;
}
