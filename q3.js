let num1 = Number(prompt("insert first num"));
let num2 = Number(prompt("insert secont num"));
let num3 = Number(prompt("insert third num"));
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num2)) {
  alert(
    Math.max(num1, num2, num3) +
      "," +
      Math.min(
        Math.max(num1, num2),
        Math.max(num1, num3),
        Math.max(num2, num3)
      ) +
      "," +
      Math.min(num1, num2, num3)
  );
} else alert("One of the inserts is not a number");
