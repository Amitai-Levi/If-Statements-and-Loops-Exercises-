// let total = 0;
// let count = 0;
// let current = 0;
// let dig1 = 0;
// let dig2 = 0;
// console.log("hi");
// while (total < 5) {
//   current = count;
//   dig2 = 0;
//   while (current > 10) {
//     while (current > 0) {
//       dig1 = current % 10;
//       dig2 += dig1 * dig1;
//       current = (current - dig1) / 10;
//     }
//     current = dig2;
//   }
//   if (dig2 === 1) {
//     console.log(count);
//     total++;
//   }
//   count++;
// }
// function isHappy(first, last) {
//   if (first === undefined) first = 0;
//   if (last === undefined) last = 0;
//   first *= first;
//   last *= last;
//   if (first * first + last * last === 1) return true;
//   if (first * 10 + last < 1) return false;
//   return isHappy(first, last);
// }
// let total = 0;
// let count = 0;
// while (total < 5) {
//   if (isHappy(((count % 100) - (count % 10)) / 10, count % 10)) {
//     console.log(count);
//     total++;
//   }
//   count++;
// }
const sadArr = [];
const happyArr = [];
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
  num = num.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += +num[i] * +num[i];
  if (sum === 1 || happyArr.indexOf(num) != -1) {
    happyArr.push(num);
    return true;
  } else {
    if (sadArr.indexOf(sum) === -1) {
      sadArr.push(sum);
      return isHappy(sum);
    } else {
      return false;
    }
  }
}
