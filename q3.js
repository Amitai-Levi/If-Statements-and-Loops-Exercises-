const num1 = Number(prompt("insert first num"));
const num2 = Number(prompt("insert secont num"));
const num3 = Number(prompt("insert third num"));
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  let max = num1;
  if (max < num2) max = num2;
  if (max < num3) max = num3;
  let min = num1;
  if (min > num2) min = num2;
  if (min > num3) min = num3;
  let middle = num1;
  if ((max > num2 && min < num2) || num2 === num3) middle = num2;
  if (max > num3 && min < num3) middle = num3;
  alert(max + "," + middle + "," + min);
} else alert("One of the inserts is not a number");
