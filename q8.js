let local = [];
let total = 0;
let count = 1;
while (total < 5) {
  if (isHappy(count)) {
    total++;
    console.log(count);
  }
  count++;
}

function isHappy(num) {
  let digits = [];
  let length = (num + "").length;
  for (let x = 0; x < length; x++) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  let sum = 0;
  for (let i = 0; i < length; i++) sum += +digits[i] * +digits[i];
  if (sum === 1) {
    local = [];
    return true;
  } else {
    if (local.indexOf(sum) === -1) {
      local.push(sum);
      return isHappy(sum);
    } else {
      local = [];
      return false;
    }
  }
}
