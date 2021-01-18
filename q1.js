num1 = Number(prompt("insert first num"));
num2 = Number(prompt("insert secont num"));
if (!isNaN(num1) && !isNaN(num2)) {
  alert(Math.max(num1, num2));
} else {
  alert("one of the inserts is not a number");
}
