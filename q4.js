const num1 = Number(prompt("insert first num"));
const num2 = Number(prompt("insert secont num"));
const num3 = Number(prompt("insert third num"));
const num4 = Number(prompt("insert fourth num"));
const num5 = Number(prompt("insert fifth num"));
if (
  !isNaN(num1) &&
  !isNaN(num2) &&
  !isNaN(num3) &&
  !isNaN(num4) &&
  !isNaN(num5)
) {
  let max = num1;
  if (max < num2) max = num2;
  if (max < num3) max = num3;
  if (max < num4) max = num4;
  if (max < num5) max = num5;

  alert(max);
} else alert("One of the inserts is not a number");
