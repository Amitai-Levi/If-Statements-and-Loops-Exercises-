let num1 = Number(prompt("insert first num"));
let num2 = Number(prompt("insert secont num"));
if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 > num2) alert(num1);
  else alert(num2);
} else {
  alert("one of the inserts is not a number");
}
