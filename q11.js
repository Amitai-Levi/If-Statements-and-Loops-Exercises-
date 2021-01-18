const num1 = Number(prompt("insert first num"));
const num2 = Number(prompt("insert secont num"));

let message = "One of the inserts is not a number";
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num2)) {
  let max = Math.max(num1, num2);
  let flag = false;
  while (!flag && max > 0) {
    if (num1 % max === 0 && num2 % max === 0) {
      flag = true;
      alert(max);
      break;
    }
    max--;
  }
}
