const num1 = Number(prompt("insert first num"));
const num2 = Number(prompt("insert secont num"));
const num3 = Number(prompt("insert third num"));
let message = "One of the inserts is not a number";
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num2)) {
  const product = num1 * num2 * num3;
  if (product > 0) message = "The sign is +";
  else if (product < 0) {
    message = "The sign is -";
  } else message = "the sign is 0";
}
alert(message);
